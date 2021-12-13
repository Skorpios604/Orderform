document.addEventListener('keydown', (event) => {
    var text = event.target.value;

    if(text.length >= 2) { 
    showResults(text);
    }
    // TODO: Make HTTP Request Here
    });

    function showResults(text) {

        var array = ["item1", "item2", "item3", "item3", "item4", "item4", "item5", "item5", "item5"];
        
        var filter = array.filter(element => element.indexOf(text)!=-1);

        ul = document.createElement('ul');

            for(var i = 0; i < filter.length; i++) {
                var li = document.createElement('li');
                ul.appendChild(li);
                var hr = document.createElement('hr');
                ul.appendChild(hr);
                li.innerHTML += filter[i];
            }
    
        document.getElementById("result").innerHTML = ul.innerHTML;


    }

    function addToOrder() {
        
        var type = document.getElementById("type");
        var item = document.getElementById("item");
        var id = document.getElementById("id");
        var quantity = document.getElementById("quantity");
        var date = document.getElementById("date");
        var costcode = document.getElementById("costcode");
        var notes = document.getElementById("notes1");

        var parentDiv = document.getElementById("parent-div");

        parentDiv.innerHTML = parentDiv.innerHTML + '<div class="field-div _2nd">\
        <div class="type-field _2nd">'+type.value+'</div>\
        <div class="item-field _2nd">'+item.value+'</div>\
        <div class="id-field _2nd">'+id.value+'</div>\
        <div class="quantity-field _2nd">'+quantity.value+'</div>\
        <div class="date-field _2nd">'+date.value+'</div>\
        <div class="cost-code-field _2nd">'+costcode.value+'</div>\
        <div class="notes-div">'+notes.value+'</div>\
        <a href="#" class="button-21 w-button" onclick="deleteRow(this)">X</a>\
      </div>'; 

    }

    function deleteRow(e) {

        var row = e.closest("div");
        row.remove();
    }
    
    