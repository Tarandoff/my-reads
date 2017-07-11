import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import ListBooks from './ListBooks';
class Search extends Component{
  state = {
    query:'',

  }
  updateQuery = (query) =>{
    this.setState({
      query: query,

    })
  }
  handleKeyPress = (event) =>{
    if(event.key === 'Enter' && this.state.query){
      this.props.searchBooks(this.state.query);
    }
  }
  clearQuery = () => {
    this.setState({ query: '' })
  }
  handleShelfChange = (book,newShelf) => {
    this.props.updateBookShelf(book,newShelf);
  }
  render(){
    const {query} = this.state

    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" onClick={this.clearQuery}>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onKeyPress={(event) =>this.handleKeyPress(event)}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/** TODO: ListBooks component **/}
            {this.props.books.length >0 &&
              <ListBooks books={this.props.books} shelf={[]} updateBookShelf={this.handleShelfChange} />
            }

          </ol>
        </div>
      </div>

      )
  }
}
export default Search;