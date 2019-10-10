class Explosion {
  constructor(position,id) {
    this.pos_x = position[0];
    this.pos_y = position[1];
    this.id = new String(id);
    this.width=.25;
    this.height=.25;
    explosions.push(this);

    this.begin_explosion();
  }

  begin_explosion() {
    let e = document.createElement('div');
    e.style.height = this.height * terrain.tile_size+"px";
    e.style.width =  this.width * terrain.tile_size+"px";
    e.style.position = "absolute";
    e.style.zIndex = '4';
    // e.style.class = "fire-explosion";
    e.style.backgroundImage = "radial-gradient(white ,orange)";
    e.style.borderRadius =   this.width * terrain.tile_size / 2 + "px";
    e.style.top = (this.pos_y + this.width / 2) * terrain.tile_size + "px";
    e.style.left = (this.pos_x + this.width / 2) * terrain.tile_size  + "px";
    e.id = this.id;
    let terr = document.getElementById('terrain');
    terr.appendChild(e);

    let c = compareWalls(this.pos_x,this.pos_y, this.width, this.height, destrucWalls);
    if(c >= 0) {
      let dw = document.getElementById(destrucWalls[c].id);
      if(dw) {
          terr.removeChild(dw);
          destrucWalls.splice(c,1);
      }
    }

    c = compareWalls(this.pos_x,this.pos_y, this.width, this.height, players);
    if(c >= 0) {
      let p = document.getElementById(players[c].id);
      if(p) {
          terr.removeChild(p);
          players.splice(c,1);
      }
    }
  }

  end_explosion() {
    for(let i = 0; i < explosions.length; i++) {
      if(explosions[i].id == this.id) {
        explosions.splice(i);
        break;
      }
    }
    let e = document.getElementById(this.id);
    let terr = document.getElementById('terrain');
    terr.removeChild(e);
  }

}
