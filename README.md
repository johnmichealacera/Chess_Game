# Chess Game

A simple web-based chess game built with vanilla HTML, CSS, and JavaScript. This project creates an interactive chess board with pieces rendered using Unicode chess symbols.

## Features

- **Interactive Chess Board**: 8x8 grid with alternating light and dark squares
- **Chess Pieces**: All standard chess pieces (king, queen, rook, bishop, knight, pawn) for both white and black
- **Unicode Chess Symbols**: Uses beautiful Unicode chess piece symbols (♔♕♖♗♘♙♚♛♜♝♞♟)
- **Click Interaction**: Click on pieces to interact (currently shows piece symbol in alert)
- **Responsive Design**: Grid-based layout that adapts to different screen sizes

## Project Structure

```
Chess_Game/
├── html/
│   └── index.html          # Main HTML file
├── css/
│   └── style.css           # Styling for the chess board and pieces
├── js/
│   └── app.js              # JavaScript logic for board creation and interaction
└── README.md               # This file
```

## How to Play

1. Open `html/index.html` in your web browser
2. The chess board will be displayed with all pieces in their starting positions
3. Click on any chess piece to interact with it (currently shows the piece symbol)

## Chess Piece Layout

### Black Pieces (Top)
- **Row 8**: ♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜ (Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook)
- **Row 7**: ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ (Pawns)

### White Pieces (Bottom)
- **Row 2**: ♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙ (Pawns)
- **Row 1**: ♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖ (Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook)

## Technical Details

### HTML Structure
- Clean, semantic HTML5 structure
- Links to external CSS and JavaScript files

### CSS Features
- CSS Grid for responsive 8x8 board layout
- Alternating square colors using modular arithmetic
- Large, readable Unicode chess piece symbols
- Responsive design with viewport height units

### JavaScript Functionality
- Dynamic board generation using nested loops
- Unicode symbol assignment for each piece type
- Event listener for piece interaction
- Modular code structure for easy extension

## Future Enhancements

This is a foundation chess game that could be extended with:
- Piece movement validation
- Turn-based gameplay
- Check and checkmate detection
- Game state management
- Move history
- AI opponent
- Online multiplayer functionality

## Browser Compatibility

This chess game works in all modern web browsers that support:
- CSS Grid
- Unicode symbols
- ES6 JavaScript features

## Getting Started

1. Clone or download this repository
2. Open `html/index.html` in your preferred web browser
3. Start playing!

## License

This project is open source and available under the MIT License.

---

*Enjoy playing chess! ♔♕♖♗♘♙*
