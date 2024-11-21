import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: "Ghaith Bouallegui",
        bio: "web development",
        imgSrc: "ghaith.png",
        profession: "Développeur Web Full Stack"
      },
      show: false,
      mountTime: 0
    };
  }

  componentDidMount() {
    this.mountTimer = setInterval(() => {
      this.setState(prevState => ({
        mountTime: prevState.mountTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.mountTimer);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { personne, show, mountTime } = this.state;

    return (
      <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2>Temps depuis le montage : {mountTime} secondes</h2>
        <button 
          onClick={this.toggleShow}
          style={{
            padding: '10px',
            margin: '10px 0',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {show ? 'Masquer Profil' : 'Afficher Profil'}
        </button>

        {show && (
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={personne.imgSrc} 
              alt={personne.fullName} 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <h1>{personne.fullName}</h1>
            <p><strong>Profession :</strong> {personne.profession}</p>
            <p><strong>Bio :</strong> {personne.bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;