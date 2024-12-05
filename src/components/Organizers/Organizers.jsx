import { uid } from "uid"
import OrganizerCard from '../OrganizerCard/OrganizerCard'
import './Organizers.css'

const organizers = [
    {
        name: 'Valentine Okundaye',
        title: 'Head Muckety Muck',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus libero eos vel. Labore fugiat obcaecati error eligendi dolore iure, et nobis facilis odio reiciendis atque unde deleniti inventore sequi ducimus maxime quo dicta repellat facere veniam, sit consectetur impedit sapiente. Quam explicabo dignissimos blanditiis officiis est, beatae autem! Laborum.',
        img: '../../../src/assets/ValentineHatesThisOne.PNG',
        id: 'valentine_card'
    },
    {
        name: 'Tanner Huiyi An',
        title: 'Second In Charge',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus libero eos vel. Labore fugiat obcaecati error eligendi dolore iure, et nobis facilis odio reiciendis atque unde deleniti inventore sequi ducimus maxime quo dicta repellat facere veniam, sit consectetur impedit sapiente. Quam explicabo dignissimos blanditiis officiis est, beatae autem! Laborum.',
        img: '../../../src/assets/Tanner.PNG',
        id: 'tanner_card'
    },
    {
        name: 'Test Name',
        title: 'Head Muckety Muck',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus libero eos vel. Labore fugiat obcaecati error eligendi dolore iure, et nobis facilis odio reiciendis atque unde deleniti inventore sequi ducimus maxime quo dicta repellat facere veniam, sit consectetur impedit sapiente. Quam explicabo dignissimos blanditiis officiis est, beatae autem! Laborum.',
        img: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png',
        id: 'test_card'
    },
    {
        name: 'Another Test',
        title: 'First Bitch',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus, dicta consequuntur rem ducimus repellat id, nostrum assumenda reprehenderit ea facere doloribus quis sequi delectus nisi? Voluptate cum molestias deserunt!',
        img: 'https://static.thenounproject.com/png/1669490-200.png',
        id: 'test2_card'
    }
]

const Organizers = () => {
  return (
    <div className="organizers">
        <h2 className="organizers__title">Organizers</h2>
        <p className="organizers__desc">These are the people who help make Baltimore Code & Coffee a possibility</p>
        <div className="organizers__tiles">
            {organizers.map(organizer => {
                return (
                    <OrganizerCard organizer = {organizer} key ={uid} />
                )
            })}
        </div>
    </div>
  )
}

export default Organizers