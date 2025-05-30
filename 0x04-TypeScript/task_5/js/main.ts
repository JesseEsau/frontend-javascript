// MajorCredits and MinorCredits with branding
interface MajorCredits {
    credits: number;
    _brand: 'major';
}

interface MinorCredits {
    credits: number;
    _brand: 'minor';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'major'
    };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'minor'
    };
}

// Example usage (optional for debugging)
const major1: MajorCredits = { credits: 3, _brand: 'major' };
const major2: MajorCredits = { credits: 4, _brand: 'major' };
const totalMajor = sumMajorCredits(major1, major2);

const minor1: MinorCredits = { credits: 2, _brand: 'minor' };
const minor2: MinorCredits = { credits: 1, _brand: 'minor' };
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(totalMajor); // { credits: 7, _brand: 'major' }
console.log(totalMinor); // { credits: 3, _brand: 'minor' }
