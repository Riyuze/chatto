import React from 'react';
import {
    Text,
    Card
} from "@nextui-org/react";

const BotMessage = () => {
  return (
    <div className="BotMessage flex gap-5 mb-5 p-2">
        <Card>
            <Text className="font-bold pt-2" size={20} css={{
                textGradient: "45deg, $blue400 -20%, $blue800 50%"
            }}>Chatto Bot</Text>
            <Text className='pb-2'>Text</Text>
        </Card>
    </div>
  )
}

export default BotMessage