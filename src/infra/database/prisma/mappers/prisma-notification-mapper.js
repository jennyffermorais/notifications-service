"use strict";
exports.__esModule = true;
exports.PrismaNotificationMapper = void 0;
var PrismaNotificationMapper = /** @class */ (function () {
    function PrismaNotificationMapper() {
    }
    PrismaNotificationMapper.toPrisma = function (notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        };
    };
    return PrismaNotificationMapper;
}());
exports.PrismaNotificationMapper = PrismaNotificationMapper;
