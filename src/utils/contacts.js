const contacts= [
    {
        userName:"Ashish",
        id:1,
        status:'online',
        photo:"https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80",
        chats:[
            {
                message:"hi Ashish",
                sender:'self',
                timestamps:'12.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'12.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'12.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'12.05 PM'
            },
            {
                message:"m good, will you be free on today's evening",
                sender:'self',
                timestamps:'12.10 PM'
            },
            {
                message:"anytime for u buddy",
                sender:'user',
                timestamps:'12.13 PM'
            },
            {
                 message:"Ok then let's meet today 6.00 PM",
                sender:'self',
                timestamps:'12.17 PM'
            },
            {
                message:"yeah that's great :)",
                sender:'user',
                timestamps:'12.18 PM'
            }

        ]

    },
    {
        userName:"Preeti",
        id:2,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        chats:[
            {
                message:"hi Preeti",
                sender:'self',
                timestamps:'01.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'01.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'01.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'01.05 PM'
            }
        ]

    },
    {
        userName:"Ayush",
        id:3,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
        chats:[]
    },
    {
        userName:"Akansha",
        id:4,
        status:'online',
        photo:"https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        chats:[
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'05.02 PM'
            },
            {
                message:"hi Akansha",
                sender:'self',
                timestamps:'05.02 PM'
            },
            {
                message:"r u in bilaspur ??",
                sender:'user',
                timestamps:'05.03 PM'
            },
            {
                message:"yeah and you ??",
                sender:'self',
                timestamps:'05.05 PM'
            },
            {
                message:"m in bhilai ??",
                sender:'user',
                timestamps:'05.07 PM'
            },
            {
                message:"ok i will be there next week for college work let's meet that day !! ",
                sender:'self',
                timestamps:'05.10 PM'
            },
            {
                message:"done !!!",
                sender:'user',
                timestamps:'05.11 PM'
            }
        ]

    },
    {
        userName:"Avinash",
        id:5,
        status:'online',
        photo:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80",
        chats:[]
    },
    {
        userName:"Ananya",
        id:6,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
        chats:[]
    },
    {
        userName:"Vinod",
        id:7,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        chats:[
            {
                message:"i will be unable to Attend today's class Abhishek so don't wait for me",
                sender:'user',
                timestamps:"08.00 AM"
            },
            {
                message:"Ok will meet you after coaching and give you the notes of today's class.",
                sender:'self',
                timestamps:"08.05 AM"
            }
        ]
    },
    {
        userName:"Kirti",
        id:8,
        status:'online',
        photo:"https://images.unsplash.com/photo-1558439749-b53250f4ffb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80",
        chats:[]
    },
    {
        userName:"Ritesh",
        id:9,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        chats:[
            {
                message:"hi Ritesh",
                sender:'self',
                timestamps:'01.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'01.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'01.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'01.05 PM'
            }
        ]

    },
    {
        userName:"Vishnupriya",
        id:10,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
        chats:[
            {
                message:"hi Vishnupriya",
                sender:'self',
                timestamps:'01.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'01.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'01.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'01.05 PM'
            }
        ]

    },
    {
        userName:"Rajat",
        id:11,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        chats:[
            {
                message:"hi Rajat",
                sender:'self',
                timestamps:'01.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'01.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'01.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'01.05 PM'
            }
        ]

    },
    {
        userName:"Manik",
        id:12,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1599566147214-ce487862ea4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=347&q=80",
        chats:[
            {
                message:"hi Manik",
                sender:'self',
                timestamps:'01.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'01.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'01.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'01.05 PM'
            }
        ]

    },
    {
        userName:"Nikita",
        id:13,
        status:'offline',
        photo:"https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
        chats:[
            {
                message:"hi Nikita",
                sender:'self',
                timestamps:'01.00 PM'
            },
            {
                message:"hi Abhsihek",
                sender:'user',
                timestamps:'01.02 PM'
            },
            {
                message:"how are you??",
                sender:'self',
                timestamps:'01.03 PM'
            },
            {
                message:"m fine wat abt u ??",
                sender:'user',
                timestamps:'01.05 PM'
            }
        ]

    }
]

export default contacts;