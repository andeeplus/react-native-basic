import commentsPic from '../../assets/icons/ic_default_user.png'
import postImage from '../../assets/images/cat1.jpg'
import profilePic from '../../assets/images/profilePic.jpg'

const BruceMiller = {
  userData:{
    name: 'Bruce Miller',
    profilePic: profilePic,
    email: 'bmiller@gmail.com',
    followers: 320,
    following: 90,
    posts: 1020,
    status: 'I Love cats!'
  },
  entries:[
    {
      id: 0,
      username: 'Bruce miller',
      nickname: '@bmiller',
      city: 'Barcelona',
      profilePic: profilePic,
      time: 'Hace 1 hora',
      img: postImage,
      title: 'Post Number One',
      text:'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi, conubia nisi facilisi augue mus eros. Magna facilisi himenaeos torquent orci ac nisl ut rhoncus suspendisse accumsan fermentum arcu consequat',
      location: 'Barcelona',
      likes: 1,
      comments: [...Array(8).fill({user: 'John Doe', comment:'Morbi augue at lacinia accumsan ultrices condimentum taciti aenean ligula placerat justo, habitasse massa feugiat', profilePic: commentsPic, time: 'Hace dos horas'})],
    },
    {
      id: 1,
      username: 'Bruce miller',
      nickname: '@bmiller',
      city: 'Barcelona',
      profilePic: profilePic,
      time: 'Hace 2 hora',
      img: postImage,
      title: 'Post Number Two',
      text:'Lorem ipsum dolor sit amet consectetur adipiscing elit morbi, conubia nisi facilisi augue mus eros. Magna facilisi himenaeos torquent orci ac nisl ut rhoncus suspendisse accumsan fermentum arcu consequat',
      location: 'Barcelona',
      likes: 0,
      comments: [],
    }
  ],
  followers:[
    {
      name: 'John Doe',
      username: '@doedoe',
      profilePic: commentsPic
    },
    {
      name: 'React Tester',
      username: '@reacttest',
      profilePic: commentsPic
    },
    {
      name: 'Elliot Perry',
      username: '@elliot',
      profilePic: commentsPic
    },
    {
      name: 'Frankie Knuckles',
      username: '@frankie',
      profilePic: commentsPic
    },
    {
      name: 'Mermaid One',
      username: '@mermaid',
      profilePic: commentsPic
    },
    {
      name: 'Free Willy',
      username: '@freethewilly',
      profilePic: commentsPic
    },
    {
      name: 'Another One',
      username: '@another',
      profilePic: commentsPic
    },
    {
      name: 'Eazy Peasy',
      username: '@es-pz',
      profilePic: commentsPic
    },
    {
      name: 'Last One',
      username: '@lastone',
      profilePic: commentsPic
    },
    {
      name: 'Real Last One',
      username: '@reallastone',
      profilePic: commentsPic
    },
  ],
  notifications:[
    {
      action: 'NEW_FOLLOWER',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      profilePic: commentsPic
    },
    {
      action: 'LIKE',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      image: postImage,
      profilePic: commentsPic
    },
    {
      action: 'LIKE',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      image: postImage,
      profilePic: commentsPic
    },
    {
      action: 'NEW_FOLLOWER',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      profilePic: commentsPic
    },
    {
      action: 'NEW_FOLLOWER',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      profilePic: commentsPic
    },
    {
      action: 'LIKE',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      image: postImage,
      profilePic: commentsPic
    },
    {
      action: 'NEW_FOLLOWER',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      profilePic: commentsPic
    },
    {
      action: 'LIKE',
      user: 'Bradley Knight',
      time: 'Hace dos horas',
      image: postImage,
      profilePic: commentsPic
    }
  ]
}

export default BruceMiller