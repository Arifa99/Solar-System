import React from 'react'
import {AppRegistry, asset, Text, View, VrButton, Model, StyleSheet } from 'react-vr'
const mystyle = StyleSheet.create({
  style1:{
    backgroundColor: '#777879',
    fontSize: 0.3,
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    color:'blue',

  }
})

export default class Description extends React.Component
{
  constructor()
  {
    super();
    this.state ={
      rotation:0,
      selectedPlanetName:"Earth",
      selectedPlanetDescription:"he third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life. Earth's atmosphere is rich in nitrogen and oxygen. Earth's surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second).",
      modelName:"sphere.obj",
      textureName:"earth.png",
      selectedPlanetScale:[0.9,0.9,0.9],
    }
  }
  componentDidMount(){
    this.rotate();
  }
  rotate()
  {
    this.setState({
      rotation:this.state.rotation +1,
    });
    if(this.state.rotation >360)
    {
      this.setState({
        rotation:1
      });
    }
      requestAnimationFrame(this.rotate.bind(this))
  }

  changePlanet(selection)
  {
    let planetName;
    let planetDescription;
    let planetTextureName;
    let planetModelName;
    let planetScale;

    switch(selection){
      case 1:
      planetName = "Mercury",
      planetDescription = "Mercury is the closest planet to the Sun and on average, all seven other planets.The smallest planet in the Solar System, Mercury has no natural satellites. Besides impact craters, its only known geological features are lobed ridges or rupes that were probably produced by a period of contraction early in its history.Mercury's very tenuous atmosphere consists of atoms blasted off its surface by the solar wind.Its relatively large iron core and thin mantle have not yet been adequately explained. Hypotheses include that its outer layers were stripped off by a giant impact, or that it was prevented from fully accreting by the young Sun's energy.",
      planetTextureName = "mercury.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.3,0.3,0.3];
      break;
      case 2:
      planetName = "Venus",
      planetDescription = "Venus is close in size to Earth and, like Earth, has a thick silicate mantle around an iron core, a substantial atmosphere, and evidence of internal geological activity. It is much drier than Earth, and its atmosphere is ninety times as dense. Venus has no natural satellites. It is the hottest planet, with surface temperatures over 400 °C (752 °F), most likely due to the amount of greenhouse gases in the atmosphere.No definitive evidence of current geological activity has been detected on Venus, but it has no magnetic field that would prevent depletion of its substantial atmosphere, which suggests that its atmosphere is being replenished by volcanic eruptions.",
      planetTextureName = "venus.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.58,0.58,0.58];
      break;
      case 3:
      planetName = "Earth",
      planetDescription = "The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life. Earth's atmosphere is rich in nitrogen and oxygen. Earth's surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second).",
      planetTextureName = "earth.png",
      planetModelName = "sphere.obj",
      planetScale = [0.6,0.6,0.6];
      break;
      case 4:
      planetName = "Mars",
      planetDescription = "The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue. Mars shares similarities with Earth: It is rocky, has mountains, valleys and canyons, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms. ",
      planetTextureName = "mars.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.4,0.4,0.4];
      break;
      case 5:
      planetName = "Jupiter",
      planetDescription = "The fifth planet from the sun, Jupiter is a giant gas world that is the most massive planet in our solar system — more than twice as massive as all the other planets combined, according to NASA. Its swirling clouds are colorful due to different types of trace gases. And a major feature in its swirling clouds is the Great Red Spot, a giant storm more than 10,000 miles wide. It has raged at more than 400 mph for the last 150 years, at least. Jupiter has a strong magnetic field, and with 75 moons, it looks a bit like a miniature solar system.",
      planetTextureName = "jupiter.jpg",
      planetModelName = "sphere.obj",
      planetScale = [1.1,1.1,1.1];
      break;
      case 6:
      planetName = "Saturn",
      planetDescription = "The sixth planet from the sun, Saturn is known most for its rings. When polymath Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts: a planet and two large moons on either side. Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery. More than 40 years later, Christiaan Huygens proposed that they were rings. The rings are made of ice and rock and scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium and has numerous moons.",
      planetTextureName = "saturn.jpg",
      planetModelName = "Saturn.obj",
      planetScale = [1.5,1.5,1.5];
      break;
      case 7:
      planetName = "Uranus",
      planetDescription = "The seventh planet from the sun, Uranus is an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus. But unlike Venus or any other planet, its equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers believe an object twice the size of Earth collided with Uranus roughly 4 billion years ago, causing Uranus to tilt. That tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years at a time.",
      planetTextureName = "uranus.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.8,0.8,0.8];
      break;
      case 8:
      planetName = "Neptune",
      planetDescription = "The eighth planet from the sun, Neptune is about the size of Uranus and is known for supersonic strong winds. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. Neptune was the first planet predicted to exist by using math, before it was visually detected. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest some other planet might be exerting a gravitational tug. German astronomer Johann Galle used calculations to help find Neptune in a telescope. Neptune is about 17 times as massive as Earth and has a rocky core",
      planetTextureName = "neptune.jpg",
      planetModelName = "sphere.obj",
      planetScale = [0.7,0.7,0.7];
      break;
    }
    this.setState({selectedPlanetName:planetName});
    this.setState({selectedPlanetDescription:planetDescription});
    this.setState({selectedPlanetScale:planetScale});
    this.setState({modelName:planetModelName});
    this.setState({textureName:planetTextureName});
  }
    render(){
      return(
        <View style={{
          transform:[{translate:[0,-3,0]}, {rotateX:-90}],
          flexDirection:'row',
        }}>
          <View>
          <Model
              source={{
                obj:asset(this.state.modelName)
              }}
              texture={asset(this.state.textureName)}
              style={{
                transform:[{translate:[-4,-2,-5]}, {rotateY:this.state.rotation}, {scale:this.state.selectedPlanetScale}, {rotateX:30}],

              }}
            />
          </View>
          <View>
            <Text style={{

              fontSize:0.3,
              textAlign:'center',

            }}>
            {this.state.selectedPlanetName}
            </Text>
            <Text style={{
              margin:0.1,
              fontSize:0.2,
              width:3.5,
            }}>
            {this.state.selectedPlanetDescription}


            </Text>
          </View>
            <View>
              <VrButton onClick={ () => this.changePlanet(1)} >
                <Text style={mystyle.style1} >
                    Mercury
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(2)}>
                <Text style={mystyle.style1}>
                    Venus
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(3)}>
                <Text style={mystyle.style1}>
                    Earth
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(4)}>
                <Text style={mystyle.style1}>
                    Mars
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(5)}>
                <Text style={mystyle.style1}>
                    Jupiter
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(6)}>
                <Text style={mystyle.style1}>
                      Saturn
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(7)}>
                <Text style={mystyle.style1}>
                 Uranus
                </Text>
              </VrButton>
              <VrButton onClick={ () => this.changePlanet(8)}>
                <Text style={mystyle.style1}>
                  Neptune
                </Text>
              </VrButton>

            </View>
        </View>

    )
  }
}
