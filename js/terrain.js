class Terrain {
  constructor(width, height, tile_size) {
    this.width = width;
    this.height = height;
    this.tile_size = tile_size;
  }

  build_static_elems() {
    let terr = document.createElement('div');
    terr.id = "terrain";
    // terr.className="terrain";

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let ground_tile = document.createElement('div');
        ground_tile.style.width = this.tile_size + 'px';
        ground_tile.style.height = this.tile_size + 'px';
        ground_tile.style.left = j * this.tile_size + "px";
        ground_tile.style.top = i * this.tile_size + "px";
        ground_tile.style.backgroundColor = "#e22";
        ground_tile.style.position = 'absolute';
        ground_tile.style.zIndex = '1';

        if (j % 2 == 1 && i % 2 == 1) {
          ground_tile.style.backgroundColor = "#888";
          ground_tile.style.zIndex = '2';
          walls.push(new Wall(j, i, 1, 1, 'wall_'+walls_counter));
          ground_tile.id = 'wall_'+walls_counter++;
        }
        terr.appendChild(ground_tile);
      }
    }
    document.body.appendChild(terr);
  }

  build_dynamic_elems() {
    let terr = document.getElementById('terrain');
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if(
          !(i%2==1 && j%2==1)
          && Math.random()<.5
          && !(i<2&&j==0) && !(i==0&&j<2)
          && !(i>=this.height-2&&j==0) && !(i>=this.height-2&&j<2)
          && !(i==this.height-1&&j>=this.width-2) && !(i>=this.height-2&&j==this.width-1)
          && !(i==0&&j>=this.width-2) && !(i<2&&j==this.width-1)) {
            let destructable_tile = document.createElement('div');
            destructable_tile.style.width = this.tile_size + 'px';
            destructable_tile.style.height = this.tile_size + 'px';
            destructable_tile.style.left = j * this.tile_size + "px";
            destructable_tile.style.top = i * this.tile_size + "px";
            destructable_tile.style.backgroundColor = "#111";
            destructable_tile.style.position = 'absolute';
            destructable_tile.style.zIndex = '1';
            destructable_tile.id = "destructable_wall_"+ destructWalls_counter;
            destrucWalls.push(new Wall(j,i, 1, 1, "destructable_wall_"+destructWalls_counter++, true));
            terr.appendChild(destructable_tile);
        }
      }
    }
  }

  compareWallsCoords(coords) {
    if (walls[0].length == coords.length) {
      for (let i = 0; i < walls.length; i++) {
        if (walls[i][0] == coords[0] && walls[i][1] == coords[1]) {
          return true;
        }
      }
      return false;
    }
  }
}
