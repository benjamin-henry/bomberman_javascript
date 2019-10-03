class Terrain {
  constructor (width, height, tile_size) {
    this.width = width;
    this.height = height;
    this.tile_size = tile_size;
  }

  build_ground() {
    let terrain = document.createElement('div');
    terrain.id = "terrain";
    terrain.style.position = 'relative';

    for(var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.width; j++) {
        let ground_tile = document.createElement('div');
        ground_tile.style.width = this.tile_size + 'px';
        ground_tile.style.height = this.tile_size + 'px';
        ground_tile.style.left=j*this.tile_size+"px";
        ground_tile.style.top=i*this.tile_size+"px";
        ground_tile.style.backgroundColor="#050";
        ground_tile.style.position = 'absolute';
        ground_tile.style.zIndex = '1';

        if(j%2==1 && i%2==1){
          ground_tile.style.backgroundColor="#555";
          ground_tile.style.zIndex = '2';
          walls.push([j,i]);
        }

        terrain.appendChild(ground_tile);
      }
    }
    document.body.appendChild(terrain);
  }

  build_walls() {

  }
}
