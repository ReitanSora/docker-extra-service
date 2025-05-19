import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { Resend } from 'resend';

@Injectable()
export class IpService {
  async findAll() {
    const publicIpRes = await fetch('https://api.ipify.org?format=json');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const publicIp = await publicIpRes.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return publicIp;
  }

  async createDatabase(tableName: any) {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    const pageID = process.env.PAGE_ID;
    try {
      const newDb = await notion.databases.create({
        parent: {
          type: 'page_id',
          page_id: pageID || '',
        },
        title: [
          {
            type: 'text',
            text: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              content: tableName.title,
            },
          },
        ],
        properties: {
          Nombre: {
            title: {},
          },
          Email: {
            rich_text: {},
          },
        },
      });
      return newDb;
    } catch (error) {
      console.log(error);
    }
  }

  async sendEmail(body: any) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Distribuida <onboarding@resend.dev>',
      to: ['stivenpilca@gmail.com'],
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      subject: body.subject,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      html: `<p>${body.content}</p>`,
    });
  }
}
