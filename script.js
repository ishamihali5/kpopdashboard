const idols = [
  {
    name: "BTS",
    followers: {instagram: 50000000, twitter: 40000000, tiktok: 30000000},
    albums: 10,
    songs: 120,
    awards: 200,
    mvViews: 1500000000
  },
  {
    name: "BLACKPINK",
    followers: {instagram: 60000000, twitter: 10000000, tiktok: 25000000},
    albums: 5,
    songs: 50,
    awards: 120,
    mvViews: 1200000000
  },
  {
    name: "TWICE",
    followers: {instagram: 15000000, twitter: 5000000, tiktok: 10000000},
    albums: 9,
    songs: 100,
    awards: 90,
    mvViews: 500000000
  }
];

const idolSelect = document.getElementById("idolSelect");
const followersDiv = document.getElementById("followers");
const albumsDiv = document.getElementById("albums");
const songsDiv = document.getElementById("songs");
const awardsDiv = document.getElementById("awards");
const ctx = document.getElementById('chart').getContext('2d');

let chart;

// Populate dropdown
idols.forEach((idol, i) => {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = idol.name;
  idolSelect.appendChild(option);
});

// Update dashboard
function updateDashboard(index) {
  const idol = idols[index];
  const totalFollowers = idol.followers.instagram + idol.followers.twitter + idol.followers.tiktok;

  followersDiv.textContent = `Followers: ${totalFollowers.toLocaleString()}`;
  albumsDiv.textContent = `Albums: ${idol.albums}`;
  songsDiv.textContent = `Songs: ${idol.songs}`;
  awardsDiv.textContent = `Awards: ${idol.awards}`;

  const data = {
    labels: ["Instagram", "Twitter", "TikTok"],
    datasets: [{
      label: 'Followers',
      data: [idol.followers.instagram, idol.followers.twitter, idol.followers.tiktok],
      backgroundColor: ['#f06292','#ba68c8','#4fc3f7']
    }]
  };

  if(chart) chart.destroy();
  chart = new Chart(ctx, { type: 'bar', data: data });
}

// Event listener
idolSelect.addEventListener("change", e => updateDashboard(e.target.value));

// Initial load
updateDashboard(0);
