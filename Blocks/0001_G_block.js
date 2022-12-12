let blockchain = document.querySelector("blockchain");
let blockID;
let name;
let age;
createBlock(2);
function createBlock(
  blockID,
  name = "Huy Minh",
  href = "https://github.com/brianphanphm",
  age = "1"
) {
  const nameBlock = document.getElementById("nameblock").value
  const username = document.getElementById("username").value
  const nextname = document.getElementById("nextname").value
  const startpoint = document.getElementById("startpoint").value
  const despoint = document.getElementById("despoint").value
  const qualitymers = document.getElementById("qualitymers").value
  let newChain = ` 
  <i class="fas fa-link"></i>
  `;
  let chain = document.createElement("chain-link");

  chain.innerHTML = newChain;

  let newBlock = `

  <div class="card-header">
    <span class="display-4">Block ${nameBlock} </span>
    <p>
    <a href="${href}" target=_blank class="text-info">(${name})</a>
    </p>
  </div>

  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <h5>Hash</h5>
      <span class="hash"
        >${generateHash()}</span
      >
      <h5>Hash of previous block</h5>
      <span class="text-muted"
        >${getPrevHash()}</span
      >
    </li>
    <li class="list-group-item">
    <h6>Tên hàng hoá</h6>
    <span class="text-muted">${username}</span>
  </li>
    <li class="list-group-item">
      <h6>Điểm khởi hành</h6>
      <span class="text-muted">${startpoint}</span>
    </li>
    <li class="list-group-item">
    <h6>Điểm đến</h6>
    <span class="text-muted">${despoint}</span>
    </li>
    <li class="list-group-item">
    <h6>Số lượng</h6>
    <span class="text-muted">${qualitymers}</span>
    </li>
    <li class="list-group-item">
    <h6>Chú thích</h6>
    <span class="text-muted">${nextname}</span>
    </li>
    <li class="list-group-item">
      <h6>Thời gian</h6>
      <span class="text-muted">${blockTimestamp()}</span>
    </li>
  </ul>

    `;
  let block = document.createElement("block");
  block.className = "card block";
  block.innerHTML = newBlock;
  //todo: Add new block to the blockchain
  blockchain.append(block);

  //todo: Add new chain to the blockchain
  blockchain.append(chain);
  // blockchain.prepend(chain);
}

// Function to generate a new random Hash

function generateHash() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 256; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// Function to get previous Hash

function getPrevHash() {
  let blocks = blockchain.children;

  for (let i = 0; i < blocks.length; i++) {
    let blockHash = blocks[i];
    console.log(blockHash);
    return blockHash.children[1].children[0].children[1].innerText;
  }
}

function blockTimestamp() {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  return (dateString =
   currentHours + ":" + currentMinutes + "-" + currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear);
}
// console.log(blockTimestamp());
