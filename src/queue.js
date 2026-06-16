import {Queue} from 'bullmq';

const connection = {
    host :'localhost',
    port: 6379,
}

const notificationQueue = new Queue("Send-emails",{
   connection
})

module.export={
    notificationQueue,
    connection,
}