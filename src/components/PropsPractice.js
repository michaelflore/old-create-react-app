import React, {Component} from 'react';

class PropsPractice extends Component {

    render() {
        const post = {
            title: "My Post",
            desc: "delayed",
            author: "babs"
        }

        const user = {
            name: "Michael",
            birthday: "june",
            social : "facebook"
        }

        return (
            <div>
                <User {...user} />
                <Post {...post} />
            </div>
        );
    }
}

const User = ({name, birthday, social}) => {
    return (
        <div>
            <Name name={name}/>
            <Birthday birthday={birthday}/>
            <Social social={social}/>
        </div>
    );
}

const Name = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}

const Birthday = (props) => {
    return (
        <div>
            <p>{props.birthday}</p>
        </div>
    );
}

const Social = (props) => {
    return (
        <div>
            <p>{props.social}</p>
        </div>
    );
}

const Post = ({title, ...rest}) => {
    //Mostly do <Component {...rest} />
    return (
        <div>
            <h3>{title}</h3>
            <p>{rest.author}</p>
        </div>
    );
}

export default PropsPractice;