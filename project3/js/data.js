var Airtable = require("airtable");

var base = new Airtable({apiKey: "keyUJX28sNd2Pai48"}).base(
  "appy4mkKkeIWxI5dW"
);
base("Table 1").select({}).eachPage(gotPageOfData, gotAllData);

const data = [];

function gotPageOfData(records, fetchNextPage) {
  console.log("gotPageOfData()");
  data.push(...records);
  fetchNextPage();
}

function gotAllData(err) {
  console.log("gotAllData()");

  console.log(data)
  main()
}

function main() {
  for (let age = 12; age >= 6; age--) {
    $('.content').append(`
      <div class="ring ring${age}">
        <span>${age}</span>
      </div>
     `)
    $(`.ring${age}`).click(function () {
      var showData = data.filter(d => d.fields.age == age&&d.fields['Featured Media']);
      $('#gridImg').empty();
      for (let j = 0; j < showData.length / 8; j++) {
        $('#gridImg').append(`
          <div class="item ${j===0?'active':''}">
          <div class="title">${age} years old memories</div>
          <div class="imgs">
            ${showData.filter((item, index) => index >= j * 8 && index < (j + 1) * 8)
          .map((item,index) => `<img src="${item.fields['Featured Media'][0].thumbnails.large.url}" data-item="item" onclick="showDetail(${(j * 8)+index})"/>`).join('')}
          </div></div>
        `)
      }
      $('#gridModal').modal('show');

      $('#detailWrap').empty();
      for (let j = 0; j < showData.length; j++) {
        $('#detailWrap').append(`
          <div class="item ${j===0?'active':''}">
          <div>
            <div class="left">
            <div>
              <div style="color: white">${age} years old memories</div>
              <img src="${showData[j].fields['Featured Media'][0].thumbnails.large.url}"/>
            </div></div>
            <div class="right">
              <div class="name">${showData[j].fields.Name}</div>
              <span class="category">${showData[j].fields.Catagory||''}</span>
              <div class="description">${showData[j].fields.Description||''}</div>
            </div></div>
          </div>
        `)
      }
    })
  }
}
function showDetail(index){
  console.log(index)
  $('#gridModal').modal('hide')

  setTimeout(()=>{
    $('#detailModal').modal('show')
    $('#detail').carousel(index)

  },500)
}
