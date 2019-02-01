import React, { Component } from "react";
import Saved from "../Saved";
import SavedList from "../SavedList";
import SearchForm from "../SearchForm";
import Results from "../Results";
import ResultsList from "../ResultsList"
import API from "../../Utils/API"
import Header from "../Header";
// import axios from "axios";


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

    //Loads saved list
    componentDidMount() {
        this.getSaved()
    }

    //Handles topic
    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    //Handles starting year
    handleStartChange = (event) => {
        this.setState({ startYear: event.target.value })
    }

    //Handles ending year
    handleEndChange = (event) => {
        this.setState({ endYear: event.target.value })
    }

    //Handles form submit
    handleSubmit = (event) => {
        event.preventDefault();
        // axios.post("/api/search/form-data", {
        //     topic: this.state.topic,
        //     startYear: this.state.startYear,
        //     endYear: this.state.endYear
        // })
            API.getNYT(this.state.topic, this.state.startYear, this.state.endYear)
            .then((response) => {
                this.setState({ articles: response.data.response.docs });
            }
            )
            .catch(err => console.log(err));
    }


//Handles article saved click
handleSaveButton = (id) => {
    const article = this.state.articles.find(article => article._id === id)
    API.saveArticle(article)
        .then(this.getSaved)
}

//Gets saved articles from database
getSaved = () => {
    API.getArticle()
        .then((res) => {
            this.setState({ saved: res.data })
        })
        .catch(err => console.log(err))

}

//Handles deleting articles from saved list
handleDeleteButton = (id) => {
    API.deleteArticle(id)
        .then(this.getSaved);

}




render(){

    return (
        <div style={{ backgroundColor: "#a7abb0" }}>
            <Header />
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