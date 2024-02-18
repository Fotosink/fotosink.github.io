# Why do I need to backup my data?

Hard drives are prone to failure. A single drop is enough to destroy all the data on a hard drive. That's why you need to backup your data. It's recommended to use the [3-2-1 backup strategy](https://www.seagate.com/blog/what-is-a-3-2-1-backup-strategy/).

> **3 Copies of Data** – Maintain three copies of data—the original, and at least two copies.

> **2 Different Media** – Use two different media types for storage. This can help reduce any impact that may be attributable to one specific storage media type. It’s your decision as to which storage medium will contain the original data and which will contain any of the additional copies.

> **1 Copy Offsite** – Keep one copy offsite to prevent the possibility of data loss due to a site-specific failure.

Fotosink stores your data across multiple disks, in multiple data centers. It automatically uses the closest data center to serve your files, while continuously replicating your data to the other data centers. This tiered storage model provides fault tolerance and data redundancy while maintaining fast access to data.

# Reliability

Fotosink runs on battle tested and reliable open source software. Under the hood, it uses ZFS, K8S, and Cloudflare.

# Architecture

![Architecture Diagram](architecture-diagram.png)