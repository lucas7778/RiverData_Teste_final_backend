export default interface IAiMessenger {
    send(message: string): Promise<string>

}