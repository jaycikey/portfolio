import type { HomeLabItem } from '@/types/data';

export const homeLab: HomeLabItem[] = [
  {
    name: 'Raspberry Pi 5',
    filename: 'pi5-services.yml',
    language: 'yaml',
    githubUrl: null,
    desc: 'Plex Media Server (native, reads from QNAP over LAN), Pi-hole and Twingate connector in Docker. 8GB model. Used for network-level ad blocking, media streaming, and zero-trust remote access into the home network.',
    tags: ['Linux', 'Docker', 'Plex', 'Pi-hole', 'Twingate'],
    icon: '🥧',
    codePreview: `# pi5-services.yml — Docker stack on Raspberry Pi 5
# Plex runs natively (better hardware-transcode support)
# Pi-hole + Twingate in Docker for clean isolation

version: "3.9"

x-restart: &restart
  restart: unless-stopped

services:
  pihole:
    image: pihole/pihole:latest
    <<: *restart
    container_name: pihole
    network_mode: host          # needed for proper DNS binding
    environment:
      TZ: America/New_York
      WEBPASSWORD: \${PIHOLE_PASSWORD}
      DNSMASQ_LISTENING: local
      FTLCONF_LOCAL_IPV4: 192.168.X.X
    volumes:
      - ./pihole/etc:/etc/pihole
      - ./pihole/dnsmasq.d:/etc/dnsmasq.d
    cap_add:
      - NET_ADMIN

  twingate:
    image: twingate/connector:latest
    <<: *restart
    container_name: twingate-pi
    sysctls:
      net.ipv4.ping_group_range: "0 2147483647"
    environment:
      TWINGATE_NETWORK: \${TWINGATE_NETWORK}
      TWINGATE_ACCESS_TOKEN: \${TWINGATE_ACCESS_TOKEN}
      TWINGATE_REFRESH_TOKEN: \${TWINGATE_REFRESH_TOKEN}
      TWINGATE_LABEL_HOSTNAME: pi5-connector

# Plex notes (running natively, not in Docker):
#   apt install plexmediaserver
#   Library mounts /mnt/qnap-media (NFS from QNAP)
#   Hardware transcode enabled via VideoCore VII
#   Remote access through Plex Pass relay`,
  },

  {
    name: 'QNAP TS-431P',
    filename: 'qnap-stack.yml',
    language: 'yaml',
    githubUrl: null,
    desc: '4-bay NAS — primary storage and Container Station host. 2× HDD for media/backups, 2× SSD as read/write cache. Hosts QVR Pro for security cameras, QuMagie for photo library (auto-backup from phone via Qfile), and a Container Station stack for remote-access tooling.',
    tags: ['NAS', 'Docker', 'Container Station', 'Storage', 'Cameras'],
    icon: '💾',
    codePreview: `# qnap-stack.yml — Container Station services on QNAP TS-431P
# Mix of remote-access, dev, and personal-cloud tooling.
# Native QNAP apps (QVR Pro for cameras, QuMagie for photos)
# run alongside outside this stack.

version: "3.9"

x-restart: &restart
  restart: unless-stopped

services:
  rustdesk-server:
    image: rustdesk/rustdesk-server:latest
    <<: *restart
    container_name: rustdesk-hbbs
    command: hbbs -r rustdesk.local
    volumes:
      - ./rustdesk/data:/root
    network_mode: host          # needed for relay discovery

  rustdesk-relay:
    image: rustdesk/rustdesk-server:latest
    <<: *restart
    container_name: rustdesk-hbbr
    command: hbbr
    volumes:
      - ./rustdesk/data:/root
    network_mode: host

  openvscode:
    image: gitpod/openvscode-server:latest
    <<: *restart
    container_name: openvscode
    user: "1000:1000"
    environment:
      OPENVSCODE_SERVER_ROOT: /home/workspace
    volumes:
      - ./vscode/workspace:/home/workspace
      - ./vscode/config:/home/.openvscode-server

  twingate-qnap:
    image: twingate/connector:latest
    <<: *restart
    container_name: twingate-qnap
    sysctls:
      net.ipv4.ping_group_range: "0 2147483647"
    environment:
      TWINGATE_NETWORK: \${TWINGATE_NETWORK}
      TWINGATE_ACCESS_TOKEN: \${TWINGATE_ACCESS_TOKEN}
      TWINGATE_REFRESH_TOKEN: \${TWINGATE_REFRESH_TOKEN}
      TWINGATE_LABEL_HOSTNAME: qnap-connector

  api-dev:
    image: node:20-alpine
    container_name: api-dev-sandbox
    working_dir: /app
    volumes:
      - ./api-dev:/app
    command: npm run dev
    environment:
      NODE_ENV: development

# Storage layout:
#   bay 1 + 2  →  HDD (media + Time Machine + camera footage)
#   bay 3 + 4  →  SSD (Container Station volumes + QuMagie cache)`,
  },
{
    name: 'MikroTik Chateau LTE12',
    filename: 'mikrotik-firewall.rsc',
    language: 'routeros',
    githubUrl: null,
    desc: 'Home gateway between the ISP and the LAN. Dual-WAN setup: ether1 (primary) with LTE failover. Defense-in-depth firewall — auto-blacklist for port scans, SYN/RST/ACK flood detection, ICMP rate-limit, admin access locked to a single trusted host, customer-chain forwarding controls. RouterOS 6.49.19 stable.',
    tags: ['MikroTik', 'RouterOS', 'Firewall', 'LTE', 'Dual-WAN'],
    icon: '🌐',
    codePreview: `# mikrotik-firewall.rsc — RouterOS export (sanitised)
# Hardware: Chateau LTE12 · ARMv7 4-core @ 716MHz
# RouterOS 6.49.19 stable
# Dual-WAN: ether1 (primary) + lte1 (failover)
# All sensitive values redacted.

# ── Drop traffic from accumulated blacklist ─────────────────
/ip firewall filter
add chain=input action=drop src-address-list=blacklist \\
    log-prefix="BLACKLIST_DROP"

# ── Trusted protocols + state tracking on both WANs ────────
add chain=input action=accept protocol=icmp
add chain=input action=accept connection-state=established \\
    in-interface=ether1
add chain=input action=accept connection-state=established \\
    in-interface=lte1
add chain=input action=accept connection-state=related \\
    in-interface=ether1
add chain=input action=accept connection-state=related \\
    in-interface=lte1

# ── Admin access: allow only from one trusted host ─────────
add chain=input action=add-src-to-address-list protocol=tcp \\
    src-address=!<admin_ip> address-list=blacklist \\
    address-list-timeout=1w3d in-interface=!bridge-local \\
    dst-port=22,8291,80,8080,443 log=yes log-prefix="ADMIN_ACCESS"
add chain=input action=drop protocol=tcp \\
    src-address=!<admin_ip> in-interface=!bridge-local \\
    dst-port=22,8291,80,8080,443

# ── Port scan auto-blacklist ───────────────────────────────
add chain=input action=add-src-to-address-list protocol=tcp \\
    psd=21,3s,3,1 address-list=blacklist \\
    address-list-timeout=1w3d log=yes log-prefix="PORT_SCAN"
add chain=input action=drop protocol=tcp psd=21,3s,3,1

# ── SYN / RST / ACK flood detection ────────────────────────
add chain=input action=add-src-to-address-list tcp-flags=syn \\
    connection-limit=30,32 protocol=tcp \\
    address-list=blacklist address-list-timeout=1w3d \\
    in-interface=!bridge-local log=yes log-prefix="SYN_FLOOD"
add chain=input action=drop tcp-flags=syn \\
    connection-limit=30,32 protocol=tcp

# ── ICMP rate-limit + fraggle / UDP-flood ──────────────────
add chain=input action=add-src-to-address-list protocol=icmp \\
    address-list=blacklist address-list-timeout=1w3d \\
    in-interface=!bridge-local limit=5,10:packet \\
    log=yes log-prefix="ICMP_FLOOD"
add chain=input action=drop protocol=udp \\
    in-interface=ether1 dst-port=123
add chain=input action=add-src-to-address-list protocol=udp \\
    dst-address=255.255.255.255 dst-port=7,19 \\
    address-list=blacklist address-list-timeout=1w3d \\
    log=yes log-prefix="Fraggle_Attack"

# ── Drop everything else from WAN ──────────────────────────
add chain=input action=drop in-interface=ether1
add chain=input action=drop in-interface=lte1

# ── Forward chain: customer policy on both WANs ────────────
add chain=forward action=jump jump-target=customer \\
    in-interface=ether1
add chain=forward action=jump jump-target=customer \\
    in-interface=lte1
add chain=customer action=accept connection-state=established
add chain=customer action=accept connection-state=related
add chain=customer action=drop`,
  },
  {
    name: 'Obsidian + Local AI Study Workflow',
    filename: 'network-study-ai.js',
    language: 'typescript',
    githubUrl: 'https://github.com/jaycikey/portfolio',
    desc: 'JavaScript QuickAdd macro that turns my Obsidian vault into an AI study system. Local Ollama (gemma4) generates recall feedback and Anki-compatible flashcards from my Network+ video notes; Claude API is the fallback when the local model is down. Includes retry logic, timeout handling, and provider-aware token budgeting.',
    tags: ['JavaScript', 'Ollama', 'Claude API', 'Obsidian', 'Local AI'],
    icon: '🧠',
    codePreview: `// network-study-ai.js — QuickAdd macro v12
// Local Ollama → Claude API fallback for Network+ study

async function askAI(provider, system, user) {
  if (provider.type === "ollama") {
    try {
      return await callOllama(system, user, provider.model);
    } catch (err) {
      console.warn("[StudyAI] Ollama failed →", err.message);
      new Notice("⚠️ Ollama down, falling back to Claude…", 2500);
      return await callClaude(system, user, CONFIG.claude.model);
    }
  }
  return await callClaude(system, user, provider.model);
}

async function callOllama(system, user, model) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const r = await fetch(CONFIG.ollama.url, {
        method: "POST",
        signal: AbortSignal.timeout(300000),
        body: JSON.stringify({
          model, system, prompt: user, stream: false,
        }),
      });
      if (!r.ok && attempt === 1 && r.status >= 500) {
        await new Promise(res => setTimeout(res, 2000));
        continue;
      }
      return (await r.json()).response?.trim() ?? "";
    } catch (err) {
      if (attempt === 2) throw err;
      await new Promise(res => setTimeout(res, 2000));
    }
  }
}

// Workflow:
//   1. Watch Udemy lecture
//   2. Write recall notes in Obsidian
//   3. Run macro → AI evaluates gaps
//   4. Macro generates Q::A flashcards
//   5. Anki imports for spaced repetition`,
  },

  {
    name: 'Windows-in-Docker on Omarchy',
    filename: 'win11-compose.yml',
    language: 'yaml',
    githubUrl: null,
    desc: 'Daily-driver laptop runs Omarchy 3.6.0 (Hyprland on Arch). Windows 11 lives in a Docker container via dockurr/windows for the rare app that does not run on Linux — Wine fallback, no dual-boot, no full VM overhead. Same workflow stays Linux-first.',
    tags: ['Docker', 'Linux', 'Omarchy', 'Hyprland', 'KVM'],
    icon: '🪟',
    codePreview: `# win11-compose.yml — Windows 11 inside Docker on Omarchy
# No dual-boot, no VirtualBox. Just one container.
# Browser-based VNC at http://localhost:8006
# https://github.com/dockur/windows

version: "3.9"

services:
  windows:
    image: dockurr/windows
    container_name: windows
    environment:
      VERSION: "11"
      RAM_SIZE: "8G"
      CPU_CORES: "4"
      DISK_SIZE: "64G"
      USERNAME: "cj"
      PASSWORD: \${WIN_PASSWORD}
      LANGUAGE: "en-US"
      REGION: "en-US"
      KEYBOARD: "en-US"
    devices:
      - /dev/kvm
      - /dev/net/tun
    cap_add:
      - NET_ADMIN
    ports:
      - "8006:8006"             # browser VNC
      - "3389:3389/tcp"         # RDP
      - "3389:3389/udp"
    volumes:
      - ./windows:/storage
    restart: unless-stopped
    stop_grace_period: 2m

# Why this setup:
#   - Linux-first daily-driver (Omarchy / Hyprland)
#   - One Windows-only app to test → just \`docker compose up\`
#   - No bootloader changes, no host pollution
#   - Tear it down with \`docker compose down -v\`

# Notes:
#   - Requires KVM enabled in BIOS
#   - First boot pulls Windows image (~5GB) and installs
#   - Performance with KVM is near-native for typical apps`,
  },

  {
    name: 'Flipper Zero + Alfa Wireless',
    filename: 'wireless-stack.md',
    language: 'markdown',
    githubUrl: null,
    desc: 'Daily-carry security research kit. Flipper Zero handles IR (TVs / ACs), NFC (key fobs / hotel cards), sub-GHz, and Bluetooth experiments. Alfa USB adapter on the laptop for proper monitor-mode and packet-injection testing on networks I own.',
    tags: ['Security', 'RF', 'NFC', 'Wireless', 'Pentest'],
    icon: '🐬',
    codePreview: `# Wireless / RF Research Stack

## Daily setup

| Device              | Role                                     |
|---------------------|------------------------------------------|
| Flipper Zero        | IR, NFC, sub-GHz, Bluetooth experiments  |
| Alfa USB adapter    | Monitor mode + packet injection on Linux |
| Omarchy laptop      | aircrack-ng, kismet, wireshark, hcxtools |

## Common workflows

### IR / sub-GHz
- Capture remote signals, replay for testing TVs, ACs, garage stuff
- Sub-GHz scan to identify ISM-band devices around home

### NFC / key research
- Read / emulate work keycards I own
- Test fob clones for personal access control project

### WiFi auditing (own networks only)
- Put Alfa into monitor mode: \`sudo airmon-ng start wlan1\`
- Capture handshake: \`airodump-ng wlan1mon\`
- Convert + crack offline: \`hcxpcapngtool\` → \`hashcat\`

## Why this matters for DevOps / Cloud

Network security is not "someone else's problem." Knowing
how a network actually breaks at the radio + protocol level
makes me a better defender at the cloud layer. WPA2 PSK
weaknesses, NFC spoofing, IR replay — same threat-modeling
muscle as cloud IAM, just at a different layer.

> **Strictly on owned hardware. No third-party networks. Ever.**`,
  },
];
