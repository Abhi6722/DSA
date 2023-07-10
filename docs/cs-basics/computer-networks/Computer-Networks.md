---
sidebar_position: 1
---

# Computer Networks

A network is a set of devices that are connected with  a physical media link. Two or more nodes are connected by physical link or two or more node are connected by one or more node . A network allows us to share data  between the connected devices . 

### Network Topology

It is the layout of the computer network and shows us how devices and cables are connected to each other . 

• Network topology can be categorized into – Bus Topology, Ring Topology, Star Topology, Mesh Topology, Tree Topology.

### Bandwidth , node , link

Bandwidth in networks refers to how much digital data we can send or receive through a link in a given length of time. It’s also referred to as the data transfer rate.

 Two or more computer are directly connected by a physical medium like optical fibre or cable . The physical medium of connection is known as link and the computer that are connected is known as nodes.

### TCP/IP MODEL

it is a compressed version of the OSI model with only 4 layers.

The name of this model is based on 2 standard protocols used i.e. TCP (Transmission Control Protocol) and IP (Internet Protocol). 

1. Link layer : Decides which links such as serial lines or classic Ethernet must be used to meet the needs of the connectionless internet layer. Ex – Sonet, Ethernet
2. Internet : The internet layer is the most important layer which holds the whole architecture together. It delivers the IP packets where they are supposed to be delivered. Ex – IP, ICMP.
3. Transport : Its functionality is almost the same as the OSI transport layer. It enables peer entities on the network to carry on a conversation. Ex – TCP, UDP
4. Application : It contains all the higher-level protocols. Ex – HTTP, SMTP

### OSI (Open system interconnection)

It deals with connecting the system that are open for communication with the other system .

There are majorly 2 main layers in the OSI model:

- Physical Layer- The lowest layer . It transform the data either in form of electrical / mechanical .
- Data Link Layer - it is used for transferring the data from one node to another node. It enables the error-free transfer of data from one node to another node.

Functions of Data-link layer:

- Frame synchronisation: Data-link layer converts the data into frames, and it ensures that the destination must recognize the starting and ending of each frame.
- Flow control: Data-link layer controls the data flow within the network.
- Error control: It detects and corrects the error occurred during the transmission from source to destination.
- Addressing: Data-link layers attach the physical address with the data frames so that the individual machines can be easily identified.
- Link management: Data-link layer manages the initiation, maintenance and termination of the link between the source and destination for the effective exchange of data.

### Gateway and router

A node that is connected to two or more networks is commonly known as a gateway. It is also known as a router. It is used to forward messages from one network to another. Both the gateway and router regulate the traffic in the network. Differences between gateway and router: A router sends the data between two similar networks while gateway sends the data between two dissimilar networks.

### PING Command

The “ping” is a utility program that allows you to check the connectivity between the network devices. You can ping devices using its IP address or name.

### DNS

Domain name system .naming system for all the resources over internet which include physical nodes and application.  It is used to locate resources easily over a network. Without DNS, users must know the IP address of the web page that you wanted to access.

**DNS Forwarder :** A forwarder is used with a DNS server when it receives DNS queries that cannot be resolved quickly. So it forwards those requests to external DNS servers for resolution. A DNS server which is configured as a forwarder will behave differently than the DNS server which is not configured as a forwarder.

**NIC -**  NIC stands for Network Interface Card. It is a peripheral card attached to the PC to connect to a network. Every NIC has its own MAC address that identifies the PC on the network. It provides a wireless connection to a local area network. NICs were mainly used in desktop computers.

### MAC address - every single computer/phone has its own unique mac address . it is a physical address. used for local identification . it cant be changed

A media access control address (MAC address) is a unique identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment.

### IP address -routable . it is a logical address. used for global identification . it is dynamic

An IP address is a unique address that identifies a device on the internet or a local network. IP stands for “Internet Protocol,” which is the set of rules governing the format of data sent via the internet or local network.

**Private IP Address** – There are three ranges of IP addresses that have been reserved

for IP addresses. They are not valid for use on the internet. **If you want to access the**

**internet on these private IPs, you must use a proxy server or NAT server.**

**Public IP Address** – **A public IP address is an address taken by the Internet Service**

**Provider** which facilitates communication on the internet.

**APIPA stands for Automatic Private IP Addressing (APIPA)**. It is a feature or characteristic in operating systems (eg. Windows) **which enables computers to self-configure an IP address** and subnet mask **automatically when their DHCP(Dynamic Host Configuration Protocol :A DHCP Server is a network server that automatically provides and assigns IP addresses, default gateways and other network parameters to client devices**. It relies on the standard protocol known as Dynamic Host Configuration Protocol) server isn’t reachable

### Difference between IPv4 and IPv6

The IPv4 is a 32-bit address, whereas IPv6 is a 128-bit hexadecimal address. IPv6 provides a large address space, and it contains a simple header as compared to IPv4.

### Subnet

A subnet is a network inside a network achieved by the process called subnetting which helps divide a network into subnets. It is used for getting a higher routing efficiency and enhances the security of the network. It reduces the time to extract the host address from the routing table.

### Firewall

The firewall is a network security system that is used to monitor the incoming and outgoing traffic and blocks the same based on the firewall security policies. It acts as a wall between the internet (public network) and the networking devices (a private network). It is either a hardware device, software program, or a combination of both. It adds a layer of security to the network.

### HTTP / HTTPS

HTTP is the HyperText Transfer Protocol which defines the set of rules and standards on how the information can be transmitted on the World Wide Web (WWW). It helps the web browsers and web servers for communication. It is a ‘stateless protocol’ where each command is independent with respect to the previous command. HTTP is an application layer protocol built upon the TCP. It uses port 80 by default. 

HTTPS is the HyperText Transfer Protocol Secure or Secure HTTP. It is an advanced and a secured version of HTTP. On top of HTTP, SSL/TLS protocol is used to provide security. It enables secure transactions by encrypting the communication and also helps identify network servers securely. It uses port 443 by default.

### SMTP

SMTP is the Simple Mail Transfer Protocol. SMTP sets the rule for communication between servers. This set of rules helps the software to transmit emails over the internet. It supports both End-to-End and Store-and-Forward methods. It is in always-listening mode on port 25.

### TCP /UDP

TCP is a connection-oriented protocol, whereas UDP is a connectionless protocol. A key difference between TCP and UDP is speed, as TCP is comparatively slower than UDP. Overall, UDP is a much faster, simpler, and
efficient protocol, however, retransmission of lost data packets is only possible with TCP.

TCP provides extensive error checking mechanisms. It is because it provides flow control and acknowledgment of data. UDP has only the basic error checking mechanism using checksums.

### What happens when you enter “[google.com](http://google.com/)”

- Check the browser cache first if the content is fresh and present in the cache display the same.
- If not, the browser checks if the IP of the URL is present in the cache (browser and OS) if not then requests the OS to do a DNS lookup using UDP to get the corresponding IP address of the URL from the DNS server to establish a new TCP connection. (looks in dns cache of browser then dns lookup by os then dns lookup by isp)
- A new TCP connection is set between the browser and the server using three-way handshaking.
- An HTTP request is sent to the server using the TCP connection.
- The web servers running on the Servers handle the incoming HTTP request and send the HTTP response.
- The browser processes the HTTP response sent by the server and may close the TCP connection or reuse the same for future requests.
- If the response data is cacheable then browsers cache the same.
- Browser decodes the response and renders the content.

### HUB VS SWITCH

**Hub:** Hub is a networking device which is used to transmit the signal to each port (except one port) to respond from which the signal was received. Hub is operated on a Physical layer. In this packet filtering is not available. It is of two types: Active Hub, Passive Hub.

**Switch:** Switch is a network device which is used to enable the connection establishment and connection termination on the basis of need. Switch is operated on the Data link layer. In this packet filtering is available. It is a type of full duplex transmission mode and it is also called an efficient bridge

### VPN

VPN (Virtual Private Network) : VPN or the Virtual Private Network is a private WAN
(Wide Area Network) built on the internet. It allows the creation of a secured tunnel
(protected network) between different networks using the internet (public network). By using the VPN, a client can connect to the organisation’s network remotely.

Advantages of VPN :

1. VPN is used to connect offices in different geographical locations remotely and is
cheaper when compared to WAN connections.
2. VPN is used for secure transactions and confidential data transfer between
multiple offices located in different geographical locations.
3. VPN keeps an organisation’s information secured against any potential threats or
intrusions by using virtualization.
4. VPN encrypts the internet traffic and disguises the online identity

Disadvantages of VPN :

1. Not designed for continuous use
2. Complexity prevents scalability
3. Lack of granular security
4. Unpredictable performance
5. Unreliable availability

### LAN

A local area network (LAN) is a collection of devices connected together in one physical location, such as a building, office, or home. A LAN can be small or large, ranging from a home network with one user to an enterprise network with thousands of users and devices in an office or school.

website is a colection of html css js files .group of files pu together. 

server - i=location where these files are stored

url- https:// - tells what kind of connection to make with the server 

google.com- domain name 

1. type url on the browser 
2. browser fetches the IP address of the domain name
3. browser establis a connection with the server
4. browseer send the request 
5. server respond with the file
6. browser render the content