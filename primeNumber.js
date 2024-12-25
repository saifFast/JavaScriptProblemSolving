function isPrime(input)
{
        for(var i = 2; i < input; i++)
        {
            if(input % i == 0)
                return false;
        }

        return true;
}

console.log(isPrime(12));
