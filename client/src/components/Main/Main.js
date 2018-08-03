import React, { Component } from "react";
import Saved from "../Saved";
import SavedList from "../SavedList";
import SearchForm from "../SearchForm";
import Results from "../Results";
import ResultsList from "../ResultsList"
import API from "../../Utils/API"
import Header from "../Header";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: "",
            startYear: "",
            endYear: "",
            articles: [],
            saved: []
        };
    }

    componentDidMount() {
        this.getSaved()
    }

    handleTopicChange = ( event ) =>{
        console.log(event.target.value)
        this.setState({topic: event.target.value})
    }
    handleFormSubmit = ( event ) => {
        event.preventDefault();
        console.log("click")
    }

    handleStartChange = ( event ) =>{
        console.log(event.target.value)
        this.setState({startYear: event.target.value})
    }

    handleEndChange = ( event ) =>{
        console.log(event.target.value)
        this.setState({endYear: event.target.value})
    }
    handleSubmit = ( event ) => {
        event.preventDefault();
        API.getNYT(this.state.topic, this.state.startYear, this.state.endYear)
        .then((res) => {
        this.setState({ articles: res.data.response.docs });
        console.log(this.state.articles)
        }
    )
      .catch(err => console.log(err));
       
        
        console.log("click")
    }

    handleSaveButton = ( id ) => {
        const article = this.state.articles.find(article => article._id === id)
        console.log("article: ", article)
        API.saveArticle(article)
        .then(this.getSaved)
    }

    getSaved = () => {
        API.getArticle()
        .then((res)=> {
        console.log(res.data)
        this.setState({saved: res.data})
        })
        .catch(err => console.log(err))

    }

    handleDeleteButton = ( id ) => {
        console.log("delete: ", id )
        API.deleteArticle(id)
        .then(this.getSaved);

    }

    
    

render (){

    debugger;

    return(
        <div>
        <Header/>
        <SearchForm
            handleSubmit={this.handleSubmit}
            handleTopicChange={this.handleTopicChange}
            handleStartChange={this.handleStartChange}
            handleEndChange={this.handleEndChange}
            />
        <Results>
        {this.state.articles.map(article => {
            return (
                <ResultsList
                    _id={article._id}
                    key={article._id}
                    title={article.headline.main}
                    date={article.pub_date}
                    url={article.web_url}
                    snippet={article.snippet}
                    handleSaveButton={this.handleSaveButton}
                    getSaved={this.getSaved}
                />
            )
        })}
        </Results>
        <Saved>
            {this.state.saved.map(saved => {
                return (<SavedList
                        _id={saved._id}
                        key={saved._id}
                        title={saved.title}
                        date={saved.date}
                        url={saved.url}
                        snippet={saved.snippet}
                        handleDeleteButton={this.handleDeleteButton}
                    />
                )
            })}
        </Saved>
    </div>
    )
}
} 
export default Main;