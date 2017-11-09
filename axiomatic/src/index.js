/*
https://hackernoon.com/simple-react-development-in-2017-113bd563691f
https://reactjs.org/tutorial/tutorial.html
https://www.robinwieruch.de/the-road-to-learn-react/
https://www.fullstackreact.com/30-days-of-react/

*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    renderSquare(i) {
        return <Square 
                 value   = {this.props.squares[i]} 
                 onClick = {() => this.props.onClick(i)}
                />;
    }

    getState() {
        return this.state.xIsNext? 'X': 'O';
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            move: 0,
            moves: Array(9).fill([]),
        };
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.move + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const moves = this.state.moves.slice();
        moves[history.length - 1] = [Math.floor(i / 3) + 1, i % 3 + 1];
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            move: history.length,
            moves: moves,
        });
    }
    
    jumpTo(move) {
        this.setState({
            xIsNext: (move % 2) === 0,
            move: move
        })
    }
    
    render() {
        const history = this.state.history;
        const current = history[this.state.move];
        const winner = calculateWinner(current.squares);
        
        const moves = history.map((step, move) => {
            const moveData = this.state.moves[move - 1];
            console.log(this.state.moves, move);
            const desc = move ?
                'Go to move #' + move + ' @ (' + moveData[0] + ',' + moveData[1] + ')':
                'Go to game start';
            
            if (move == this.state.move) {
                return (
                    <li key={move}>
                        <button 
                            onClick={() => this.jumpTo(move)}>
                            <b>{desc}</b>
                        </button>
                    </li>
              );
            } else {
                return (
                    <li key={move}>
                        <button 
                            onClick={() => this.jumpTo(move)}>
                            {desc}
                        </button>
                    </li>
              );                                  
            }
        });
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

