import nc from 'next-connect'

const dogs = [
  {
      id : 1,
    message: "https://images.dog.ceo/breeds/newfoundland/n02111277_6096.jpg",
    status: "success"
    },
    {
        id : 2,
      message: "https://images.dog.ceo/breeds/spaniel-welsh/n02102177_2911.jpg",
      status: "success"
      },
      {
        id : 3,
        message: "https://images.dog.ceo/breeds/mix/archie_02.jpg",
        status: "success"
        },
        {
            id : 4,
          message: "https://images.dog.ceo/breeds/waterdog-spanish/20190208_063211.jpg",
          status: "success"
          },
          {
            id : 5,
            message: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_3440.jpg",
            status: "success"
            },
            {
                id : 6,
              message: "https://images.dog.ceo/breeds/briard/n02105251_8240.jpg",
              status: "success"
              },
              {
                id : 7,
                message: "https://images.dog.ceo/breeds/setter-irish/n02100877_6030.jpg",
                status: "success"
                },
    
]

const handler = nc()
  .get((req,res)=>{
    res.send(dogs)
  })

  

  export default handler


