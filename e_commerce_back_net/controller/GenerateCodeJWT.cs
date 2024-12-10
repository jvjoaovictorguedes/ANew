using System.Security.Cryptography;

public class GenerateCode
{
    public static byte[] GenerateJwtSecretKey()
    {
        var key = new byte[32];
        using (var rng = new RNGCryptoServiceProvider())
        {
            rng.GetBytes(key);
        }

        return key;
    }
}
