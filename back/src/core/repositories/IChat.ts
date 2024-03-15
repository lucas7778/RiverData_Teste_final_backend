import Message from "../domain/entities/Message";
export default interface IChat {
    Createmessage(input: Message): Promise<any>;
}