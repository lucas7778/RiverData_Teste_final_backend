import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useChatMessage } from '../hooks/react-query/useChatMessage';
import { CircularProgress } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

interface inputMessageProps {
    inputMessage: string
}
export const MessageComponent = ({ inputMessage }: inputMessageProps) => {

    return (
        <div className="flex justify-end gap-2.5 pr-24 ">
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">User</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white"> {inputMessage}</p>
            </div>
        </div>
    )
}
interface ChatAnswerProps {
    output: string
};

export const ResponseMessageComponent = ({ output }: ChatAnswerProps) => {
    return (
        <div className="flex items-start gap-2.5 pt-10 pl-24 ">
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Chat</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white"> {output}</p>
            </div>
        </div>
    )
};

export const Chat = () => {
    const inputMessageRef = React.useRef<HTMLInputElement>(null)
    const [inputMessage, setInputMessage] = React.useState<string | undefined>()
    const [searchParams, _] = useSearchParams();
    const { data, isLoading } = useChatMessage(inputMessage, searchParams.get("topic") || "");

    return (
        <>
            <h1 className='text-center py-6 text-2xl '>Chat {searchParams.get("topic") || ""} </h1>
            <div className='flex flex-col w-full mb-20'>
                <MessageComponent inputMessage={inputMessage ?? ""} />
                {
                    isLoading ? <CircularProgress /> :
                        !data ? null : <ResponseMessageComponent output={data?.output ?? ""} />
                }

            </div>
            <div className="fixed bottom-4 left-0 w-full ">
                <div className="flex justify-center mt-4">
                    <div className="w-1/2">
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Chat"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                inputRef={inputMessageRef}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
                                onClick={() => { setInputMessage(inputMessageRef.current?.value) }}>
                                <SendIcon color={"primary"} />
                            </IconButton>
                        </Paper>
                    </div>
                </div>
            </div>
        </>
    )
}