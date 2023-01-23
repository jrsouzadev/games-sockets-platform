interface Message {
    messageId: string;
    from: { name: string; id: string };
    timestamp: Date;
    message: string;
}