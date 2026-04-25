const R=[
      {from:'Mangalore',to:'Udupi',demand:'HIGH',firstBus:'05:30\u201305:45 AM',lastBus:'08:00\u201308:15 PM',timings:['05:30\u201305:45 AM','06:00\u201306:15 AM','06:30\u201306:45 AM','07:00\u201307:15 AM','07:30\u201307:45 AM','08:00\u201308:15 AM','08:30\u201308:45 AM','09:00\u201309:15 AM','10:00\u201310:15 AM','11:00\u201311:15 AM','12:00\u201312:15 PM','01:00\u201301:15 PM','02:00\u201302:15 PM','03:00\u201303:15 PM','04:00\u201304:15 PM','05:00\u201305:15 PM','06:00\u201306:15 PM','07:00\u201307:15 PM','08:00\u201308:15 PM']}
];

const rangeToMins = (range) => {
    try {
        if (!range) return 0;
        const dash = range.indexOf('\u2013');
        if (dash === -1) return 0;
        const start = range.substring(0, dash).trim();
        const end   = range.substring(dash + 1).trim();
        const pm    = /PM/i.test(end);
        const parts = start.split(':');
        if (parts.length < 2) return 0;
        const [h, m] = parts.map(Number);
        let hr = h;
        if (pm && h !== 12) hr += 12;
        if (!pm && h === 12) hr = 0;
        return hr * 60 + m;
    } catch (err) {
        console.error("Error in rangeToMins:", err);
        return 0;
    }
};

R[0].timings.forEach(t => {
   console.log(t, '==>', rangeToMins(t));
});
