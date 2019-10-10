class Player {
  constructor(id) {
    this.can_plant_bomb = true;
    this.alive = true;

    this.id = id;

    this.pos_x=0;
    this.pos_y=0;

    this.width = .95;
    this.height = .95;
  }

  get_id() {
    return this.id;
  }

  getCoords() {
    return [this.pos_x, this.pos_y]; // returns [24,12];
  }

  setCoords(coord_arr) { // example setCoords([32,64]);
    this.pos_x = coord_arr[0];
    this.pos_y = coord_arr[1];
  }

  spawn(pos) {
    this.setCoords(pos);
    let terr = document.getElementById('terrain');
    let player = document.createElement('div');
    player.style.width = this.width * terrain.tile_size + "px";
    player.style.height = this.height * terrain.tile_size + "px";
    player.style.left = pos[0] * terrain.tile_size + "px";
    player.style.top = pos[1] * terrain.tile_size + "px";
    player.style.position = 'absolute';
    player.style.zIndex = '3';
    player.style.backgroundColor = "#009";
    player.id = this.id;
    terr.appendChild(player);
  }

  moveUp() {
    if(this.pos_y > 0 && compareWalls(this.pos_x, this.pos_y - 1 * moveSpeed, this.width, this.height, walls)==-1 && compareWalls(this.pos_x, this.pos_y - 1 * moveSpeed, this.width, this.height, destrucWalls)==-1) {
        this.setCoords([this.pos_x, this.pos_y - 1 * moveSpeed ]);
    }
    if(this.pos_y  < 0) {this.pos_y = 0;}
  }

  moveLeft() {
    if(this.pos_x > 0 && compareWalls(this.pos_x - 1 * moveSpeed , this.pos_y, this.width, this.height, walls)==-1 && compareWalls(this.pos_x - 1 * moveSpeed , this.pos_y, this.width, this.height, destrucWalls)==-1) {
      this.setCoords([this.pos_x - 1 * moveSpeed, this.pos_y]);
    }
    if(this.pos_x  < 0) {this.pos_x = 0;}
  }

  moveRight() {
    if(this.pos_y < terrain.height && compareWalls(this.pos_x + 1 * moveSpeed , this.pos_y, this.width, this.height, walls)==-1 && compareWalls(this.pos_x + 1 * moveSpeed , this.pos_y, this.width, this.height, destrucWalls)==-1) {
      this.setCoords([this.pos_x + 1 * moveSpeed , this.pos_y]);
    }
    if(this.pos_x + this.width > terrain.width) {this.pos_x = terrain.width-1;}
  }

  moveDown() {
    if(this.pos_y < terrain.height-1 && compareWalls(this.pos_x, this.pos_y + 1 * moveSpeed, this.width, this.height, walls)==-1 && compareWalls(this.pos_x, this.pos_y + 1 * moveSpeed, this.width, this.height, destrucWalls)==-1) {
      this.setCoords([this.pos_x, this.pos_y + 1 * moveSpeed]);
    }
    if((this.pos_y + this.height)  >  terrain.height) {this.pos_y = terrain.height-1;}
  }

  dropBomb() {
    if (this.can_plant_bomb) {
      var bomb = new Bomb(this.getCoords(),(this.id + "_bomb"), this);
      bombs.push(bomb);
      bomb.plant();
      this.can_plant_bomb = false;
      setTimeout(function() {bomb.explode()}, 1000);
    }
  }
}
