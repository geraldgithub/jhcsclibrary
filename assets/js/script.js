document.getElementById('search-btn').addEventListener('click', function(e){
    const data = document.getElementById('search').value
    window.open(`https://opac.jhcsc.edu.ph/cgi-bin/koha/opac-search.pl?idx=&q=${data}&branch_group_limit=&weight_search=1`, '_blank')
})


async function visitor(ip) {
    const data = { ip: ip};
    try {
        const response = await fetch('./db.php?route=visitor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Response:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        await visitor(data.ip)
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

async function  count_by_day() {
    try {
        const response = await fetch('./db.php?route=day');
        const data = await response.json();
        document.getElementById('today').setAttribute('data-purecounter-end', data.total);
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

async function  count_by_month() {
    try {
        const response = await fetch('./db.php?route=month');
        const data = await response.json();
        document.getElementById('month').setAttribute('data-purecounter-end', data.total);
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

async function  count_by_year() {
    try {
        const response = await fetch('./db.php?route=year');
        const data = await response.json();
        document.getElementById('year').setAttribute('data-purecounter-end', data.total);
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

async function  count_all() {
    try {
        const response = await fetch('./db.php?route=all');
        const data = await response.json();
        document.getElementById('total').setAttribute('data-purecounter-end', data.total);
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

const form = document.getElementById('send_mail');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let btn_send = document.getElementById('btn-send')
    btn_send.disabled = true
    btn_send.innerText = 'Sending...'

    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    try {
        const response = await fetch('./db.php?route=send_mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if(result.status == 200){
            alert(result.message)
            location.reload()
        }else{
            alert(result.message)
            location.reload()
        }
    } catch (error) {
        console.error('Error:', error);
    }
});


getIP()
count_by_day();
count_by_month();
count_by_year();
count_all();