console.clear();

const team = [
    {
        rank: 1,
        name: 'Lewis Hamilton',
        college: 'CollegeName',

        kudos: 36,

    },

    {
        rank: 2,
        name: 'Kimi Raikkonen',
        college: 'CollegeName',

        kudos: 31,

    },

    {
        rank: 3,
        name: 'Sebastian Vettel',
        college: 'CollegeName',

        kudos: 24,

    },

    {
        rank: 4,
        name: 'Max Verstappen',
        college: 'CollegeName',

        kudos: 22,

    },

    {
        rank: 5,
        name: 'Lando Norris',
        college: 'CollegeName',

        kudos: 18,

    },

    {
        rank: 6,
        name: 'Charles Leclerc',
        college: 'CollegeName',

        kudos: 16,

    },

    {
        rank: 7,
        name: 'George Russell',
        college: 'CollegeName',

        kudos: 10,

    },
    {
        rank: 8,
        name: 'Daniel Ricciardo',
        college: 'CollegeName',

        kudos: 7,

    },
    {
        rank: 9,
        name: 'Alexander Albon',
        college: 'CollegeName',

        kudos: 4,

    },
    {
        rank: 10,
        name: 'Carlos Sainz Jr.',
        college: 'CollegeName',

        kudos: 1,

    }];
// const eventName = "Codifica";



// const randomEmoji = () => {
//     const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
//     let randomNumber = Math.floor(Math.random() * emojis.length);
//     return emojis[randomNumber];
// };
// const randomImage = () => {
//     const image = ['https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col-retina/image.png', 'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png.transform/2col-retina/image.png'];
// let randomNumber = Math.floor(Math.random() * image.length);
// return image[randomNumber];
// };

team.sort((a, b) => b.kudos - a.kudos);
{/* <img class="c-avatar c-media__img" src="${randomImage()}" />  */ }


team.forEach(member => {
    let newRow = document.createElement('li');
    newRow.classList = 'c-list__item';
    newRow.innerHTML = `
		<div class="c-list__grid">
        
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
           
            
			<div class="c-media">


				
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
                    <a class="c-media__link u-text--small"  target="_blank">${member.college}</a>
                    
					
				</div>
			</div>
			<div class="u-text--right c-kudos">
				<div class="u-mt--8">
					<strong>${member.kudos}</strong>
				</div>
			</div>
		</div>
	`;
    if (member.rank === 1) {
        newRow.querySelector('.c-place').classList.add('u-text--dark');
        newRow.querySelector('.c-place').classList.add('u-bg--yellow');
        newRow.querySelector('.c-kudos').classList.add('u-text--yellow');
    } else if (member.rank === 2) {
        newRow.querySelector('.c-place').classList.add('u-text--dark');
        newRow.querySelector('.c-place').classList.add('u-bg--teal');
        newRow.querySelector('.c-kudos').classList.add('u-text--teal');
    } else if (member.rank === 3) {
        newRow.querySelector('.c-place').classList.add('u-text--dark');
        newRow.querySelector('.c-place').classList.add('u-bg--orange');
        newRow.querySelector('.c-kudos').classList.add('u-text--orange');
    }
    list.appendChild(newRow);
});

// Find Winner from sent kudos by sorting the drivers in the team array
{/* <img class="c-avatar c-avatar--lg" src="${winner.img}" /> */ }
// let sortedTeam = team.sort((a, b) => b.kudos - a.kudos);
// let winner = sortedTeam[0];
// { }
// // Render winner card
// const winnerCard = document.getElementById('winner');
// winnerCard.innerHTML = `
// 	<div class="u-text-small u-text--medium u-mb--16">Best Performer</div>
    
    
	
// 	<h3 class="u-mt--16">${winner.name}</h3>
//     <span class="u-text--teal u-text--small">${winner.name}</span> 
	
// `;