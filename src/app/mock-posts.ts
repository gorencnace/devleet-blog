import { Post } from './post';

export const POSTS: Post[] = [
    {
        author: "Anonymous",
        id: 1,
        title: "Title 1",
        img: "https://source.unsplash.com/600x400/?computer",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim. Phasellus vestibulum lorem sed risus ultricies. Nibh tellus molestie nunc non blandit massa. Eu turpis egestas pretium aenean. Dolor sit amet consectetur adipiscing. Aliquam eleifend mi in nulla posuere sollicitudin. Arcu odio ut sem nulla pharetra diam sit amet nisl. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. In nisl nisi scelerisque eu ultrices vitae auctor. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Aliquam purus sit amet luctus venenatis lectus.",
        comments: [
            {
                id: 1,
                author: "Anonymous",
                vote: 10,
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                comment_chain: [
                    {
                        id: 3,
                        author: "Anonymous",
                        vote: 2,
                        text: "Nibh nisl condimentum id venenatis a condimentum.",
                        comment_chain: [
                            {
                                id: 5,
                                author: "Anonymous",
                                vote: -5,
                                text: "Augue mauris augue neque gravida in fermentum et sollicitudin ac.",
                                comment_chain: []
                            }
                        ]
                    },
                    {
                        id: 6,
                        author: "Anonymous",
                        vote: -6,
                        text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque.",
                        comment_chain: []
                    }
                ]
            },
            {
                id: 2,
                author: "Anonymous",
                vote: 4,
                text: "Tincidunt tortor aliquam nulla facilisi cras fermentum odio.",
                comment_chain: []
            }
        ]
    },
    {
        author: "Anonymous",
        id: 2,
        title: "Title 2",
        img: "https://source.unsplash.com/600x400/?computer",
        text: "Bibendum at varius vel pharetra vel turpis nunc eget lorem. Lectus mauris ultrices eros in cursus turpis massa. Id diam vel quam elementum pulvinar etiam. Nibh sit amet commodo nulla facilisi nullam vehicula. Erat nam at lectus urna duis. Turpis tincidunt id aliquet risus. Facilisi nullam vehicula ipsum a. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nullam ac tortor vitae purus faucibus ornare suspendisse. In egestas erat imperdiet sed euismod. Lobortis elementum nibh tellus molestie nunc non. Sed risus ultricies tristique nulla aliquet enim tortor at. In egestas erat imperdiet sed euismod nisi. Etiam erat velit scelerisque in. Quam vulputate dignissim suspendisse in est ante in. Commodo viverra maecenas accumsan lacus vel facilisis. Nunc sed augue lacus viverra vitae congue. At tellus at urna condimentum.",
        comments: []
    },
    {
        author: "Anonymous",
        id: 3,
        title: "Title 3",
        img: "https://source.unsplash.com/600x400/?computer",
        text: "Ridiculus mus mauris vitae ultricies. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Praesent elementum facilisis leo vel fringilla est. Nunc sed augue lacus viverra vitae congue eu. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Urna nunc id cursus metus aliquam eleifend. Volutpat diam ut venenatis tellus in. Amet luctus venenatis lectus magna fringilla urna porttitor. Malesuada fames ac turpis egestas integer. Massa placerat duis ultricies lacus. Non consectetur a erat nam at lectus urna. Amet luctus venenatis lectus magna. Porttitor rhoncus dolor purus non enim. Turpis egestas pretium aenean pharetra. Ultrices sagittis orci a scelerisque purus semper eget duis at. Ut ornare lectus sit amet est. Cum sociis natoque penatibus et magnis dis.",
        comments: []
    },
]