import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

/* Creating a mock of the notifications repository.
Bando de dados em memória => Assim que a aplicação reiniciar esses dados somem.
Simulação do nosso BD em memória.
Database In-Memory
*/

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
