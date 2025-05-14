import { Injectable } from '@nestjs/common';

@Injectable()
export class IpService {
  async findAll() {
    const publicIpRes = await fetch('https://api.ipify.org?format=json');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const publicIp = await publicIpRes.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return publicIp;ors
  }
}
