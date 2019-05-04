import React from 'react';
import { render } from 'react-dom';
import Header from './Header/index';
import './style.scss';
import Post from './Post/index';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = {
    posts: [
      {
        avatar: 'http://encurtador.com.br/ptIT8',
        name: 'Carla Silva',
        hour: '10:30',
        text:
          'Lorem ipsum dolor sit amet, duo paulo feugiat ei, in vis fabellas vivendum, iusto veritus quaerendum vis an. Sea doming veritus et. Sed saepe phaedrum facilisis et. Ex usu adipisci liberavisse. Mei debet utinam eu, cu quo latine numquam gubergren. An pri erat dolorem principes, ut dolorem consequat aliquando pri. At duo viris signiferumque mediocritatem. Cum omnium phaedrum invenire an, cetero consequuntur ei sed, no corpora ponderum oportere vix. Ne eleifend splendide usu, eos bonorum officiis vituperatoribus ei. Vel sale partiendo ullamcorper in, cum ea error affert assueverit, dicta legimus mentitum ex sit.',
      },
      {
        avatar: 'http://encurtador.com.br/ktwAK',
        name: 'João High Stacks',
        hour: '16:56',
        text:
          'Blandit convenire eum an. Quo ei aliquando comprehensam, per ei stet mundi quidam. Mei id platonem urbanitas constituam. Cu dictas dolorum placerat vix, eam delenit adversarium ei. Eu mea efficiendi constituam. Nisl ferri copiosae cum et, nec sonet docendi tacimates at.',
      },
      {
        avatar: 'http://encurtador.com.br/tDOY6',
        name: 'Joana Sauro',
        hour: '21:22',
        text:
          'An ius labore expetendis contentiones, ex saepe interpretaris vix. Intellegat expetendis his ex, te nostrud delicata perpetua vim, pro ad quando dolores. Pri et ignota alienum, te vim unum ponderum, eum inimicus philosophia ut. Cum lobortis imperdiet assentior cu. Vocent volumus vulputate ei per, pri purto feugait signiferumque et. Mea duis volutpat definitionem ea.',
      },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <div className="postsContainer">
          {this.state.posts.map((post, index) => (
            <Post className="post" key={index} post={post} />
          ))}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
