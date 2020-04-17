var ROWS = 4;
var COLUMNS = 4;
let buffer = new ArrayBuffer(ROWS * COLUMNS);

function showBean(bean) {
  switch(bean) {
    case 'bean0':
    document.getElementById("bean0").style.display = "block";
    break;
    case 'bean1':
    document.getElementById("bean1").style.display = "block";
    break;
    case 'bean2':
    document.getElementById("bean2").style.display = "block";
    break;
    case 'bean3':
    document.getElementById("bean3").style.display = "block";
    break;
    case 'bean4':
    document.getElementById("bean4").style.display = "block";
    break;
    case 'bean5':
    document.getElementById("bean5").style.display = "block";
    break;
    case 'bean6':
    document.getElementById("bean6").style.display = "block";
    break;
    case 'bean7':
    document.getElementById("bean7").style.display = "block";
    break;
    case 'bean8':
    document.getElementById("bean8").style.display = "block";
    break;
    case 'bean9':
    document.getElementById("bean9").style.display = "block";
    break;
    case 'bean10':
    document.getElementById("bean10").style.display = "block";
    break;
    case 'bean11':
    document.getElementById("bean11").style.display = "block";
    break;
    case 'bean12':
    document.getElementById("bean12").style.display = "block";
    break;
    case 'bean13':
    document.getElementById("bean13").style.display = "block";
    break;
    case 'bean14':
    document.getElementById("bean14").style.display = "block";
    break;
    case 'bean15':
    document.getElementById("bean15").style.display = "block";
    break;
  }
}

function create_grid(){
  const div_container = document.getElementById("tabla");
  var grid_row;
  for (var row = 0; row < ROWS; row++){
    grid_row = create_grid_row(row);
    div_container.appendChild(grid_row);
    console.log(div_container.outerHTML);
  }
}

function create_grid_row(row){
  var row_id = "row" + row;
  var div_row_open_tag = 'div';
  var div_row_class_attr = 'row';

  var grid_row = document.createElement(div_row_open_tag);
  grid_row.classList.add(div_row_class_attr);
  for (var column = 0 ; column < COLUMNS; column++){
    cell = create_grid_cell(row, column);
    grid_row.appendChild(cell);
  }

  return grid_row;
}

function create_grid_cell(row, column){
  var div_cell_open_tag = "div";
  var div_closed_tag = '</div>';
  var div_cell_class_attr = ["col", "col-sm-1"];

  var grid_cell = document.createElement(div_cell_open_tag);
  add_class_attributes(grid_cell, div_cell_class_attr);
  anchor = create_anchor_tag(row, column);
  // grid_cell.appendChild(anchor);

  return grid_cell;
}

function create_anchor_tag(row, column){
  var anchor_open_tag = "a";
  var anchor_close_tag = '</a>';

  // var anchor = document.createElement(anchor_open_tag);
  document.write(anchor_open_tag);
  create_img_tag();
  document.write(anchor_close_tag);
}

function create_img_tag(){
  var base_path = "img/";
  var file_name = "loteria";
  var randomInt = get_random_card_num();
  var file_ext = ".png";
  var img_class = 'class="card" ';
  var full_path = base_path + file_name + randomInt + file_ext;
  var img_src = 'src=' + full_path + '>';
  var img_tag = '<img ' + img_class + img_src;
  document.write(img_tag);
}

function get_random_card_num(){
  var card_num = -1;
  var temp_num = 0;
  while(card_num == -1){
    temp_num = (Math.floor(Math.random() * 55) + 1);
    // if (!buffer.contains(temp_num)){
      // buffer.push(temp_num);
      card_num = temp_num;
    // }
  }
  return card_num;
}

function add_class_attributes(docElem, classAttr){
  for (var elem = 0; elem < classAttr.length; elem++){
    docElem.classList.add(classAttr[elem]);
  }
}

create_grid(); // calls this function when loading JavaScript in loteria.html
