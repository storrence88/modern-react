import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './Deck.css';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
  }

  fetchDeck = async () => {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: deck.data, drawn: [] });
  };

  async componentDidMount() {
    this.fetchDeck();
  }

  getCard = async () => {
    let id = this.state.deck.deck_id;
    let cardUrl = `${API_BASE_URL}/${id}/draw/`;

    try {
      let cardRes = await axios.get(cardUrl);

      if (!cardRes.data.success) {
        throw new Error('No cards remaining!');
      }

      let card = cardRes.data.cards[0];
      this.setState(prevState => ({
        drawn: [
          ...prevState.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const cards = this.state.drawn.map(card => (
      <Card key={card.id} name={card.name} image={card.image} />
    ));
    return (
      <div className='Deck'>
        <h1 className='Deck-title'>🍻 King's Cup! 🍻</h1>
        <h2 className='Deck-title subtitle'>♦ A drinking game demo made with React.js ♦</h2>
        <button className='Deck-btn' onClick={this.getCard}>
          Draw Card!
        </button>
        <button className='Deck-btn' onClick={this.fetchDeck}>
          Reset Deck
        </button>
        <div className='Deck-card-area'>{cards}</div>
        <h2 className='Deck-title subtitle'>Rules</h2>
        <p>
          A: Waterfall - Every player drinks and no one stops until the player before them
          (clockwise) does
        </p>
        <p>2: You - Pick someone to take a drink</p>
        <p>3: Me - Player who drew the card takes a drink</p>
        <p>4: Whores: All ladies take a drink</p>
        <p>5: Rule Master - Create a rule. Anyone caught breaking the rule has to take a drink</p>
        <p>6: Dicks - All guys take a drink</p>
        <p>7: Heaven - Last person to raise their hands in the air has to take a drink</p>
        <p>8: Mate - Pick someone to take a drink with you</p>
        <p>
          9: Rhyme - Choose a word. Next person has to say a word that rhymes. First one to mess up
          takes a drink
        </p>
        <p>
          10: Categories - Choose a category. Next person has to name an item from that category.
          First one to mess up takes a drink
        </p>
        <p>J: Never Have I Ever - Loser of this one has to take drink</p>
        <p>
          Q: Question Master - Ask someone a question. If they answer with a statement, they have to
          drink.
        </p>
        <p>
          K: King's Cup - Have a beer or a shot in the center of the table. Player who draws the
          last king has to drink thus ending the game
        </p>
      </div>
    );
  }
}

export default Deck;
