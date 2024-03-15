export default interface IAiMessenger {
    send(topic: string, message: string): Promise<string>

}