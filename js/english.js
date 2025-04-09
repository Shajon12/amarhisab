function convertToBanglaDate() {
    const today = new Date();

    const banglaDays = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২', '১৩', '১৪', '১৫', '১৬', '১৭', '১৮', '১৯', '২০', '২১', '২২', '২৩', '২৪', '২৫', '২৬', '২৭', '২৮', '২৯', '৩০', '৩১'];
    const banglaMonths = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

    const day = banglaDays[today.getDate() - 1]; // Adjust index for Bangla day (1 to 31)
    const month = banglaMonths[today.getMonth()]; // Get Bangla month
    const year = today.getFullYear().toString().split('').map(digit => ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'][parseInt(digit)]).join(''); // Convert year to Bangla digits

    return `${day} ${month}, ${year}`;
	
}
document.querySelector('.date span').innerText = convertToBanglaDate();
