class Bomb {
  constructor(position,id,player) {
    this.pos_x = position[0];
    this.pos_y = position[1];
    this.width = .5;
    this.height = .5;
    this.counter = 0;
    this.player = player;
    this.id = id;
  }

  plant() {
    let terr = document.getElementById('terrain');
    let b = document.createElement('div');
    b.style.width = this.width * terrain.tile_size+"px";
    b.style.height = this.height * terrain.tile_size+"px";
    b.style.position = "absolute";
    b.style.zIndex = '4';
    b.style.backgroundColor = "black";
    b.style.borderRadius = terrain.tile_size/2 + "px";
    b.style.top = (this.pos_y + (this.height) / 2) * terrain.tile_size + "px";
    b.style.left = (this.pos_x + (this.width) / 2) * terrain.tile_size  + "px";
    b.id = this.id;
    terr.appendChild(b);
  }

  explode() {
    for(let i = 0; i < bombs.length; i++) {
      if(bombs[i].id == this.id) {
        bombs.splice(i);
        break;
      }
    }
    let terr = document.getElementById('terrain');
    let b = document.getElementById(this.id);
    terr.removeChild(b);
    this.player.can_plant_bomb = true;
    
    for(let i = 0; i < 50;) {
      let x_rand = getRandomBetween(-1,1.5);
      let y_rand= getRandomBetween(-.25,.25);
      if(compareWalls(this.pos_x+x_rand, this.pos_y+y_rand, this.width, this.height, walls)==-1){
        let explosion = new Explosion([this.pos_x+x_rand, this.pos_y+y_rand],this.id+"_explosion_"+explosion_counter++);
        explosions.push(explosion);
        setTimeout(function()
          {explosion.end_explosion()}
        , 300);
        i++;
      }
    }
    for(let i = 0; i < 50;) {
      let x_rand = getRandomBetween(-.25,.25)+this.width;
      let y_rand= getRandomBetween(-1.5,1) + this.height;
      if(compareWalls(this.pos_x+x_rand, this.pos_y+y_rand, this.width, this.height, walls)==-1){
        let explosion = new Explosion([this.pos_x+x_rand, this.pos_y+y_rand],this.id+"_explosion_"+explosion_counter++);
        explosions.push(explosion);
        setTimeout(function()
          {explosion.end_explosion()}
        , 300);
        i++;
      }
    }

  }

  get_id() {
    return this.id;
  }
}
