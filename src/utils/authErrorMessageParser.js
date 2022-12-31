export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e posta adresi';
    case 'auth/email-already-exists':
      return 'Bu mail adresi zaten kullanılmış';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
    case 'auth/weak-password':
      return 'Zayıf şifre';
    case 'auth/wrong-password':
      return 'Yanlış şifre';
    case 'Location request timed out':
      return 'Konum alınamıyor';
      case 'Given String is empty or null':
        return 'Giriş bilgileri yazılmadı'

    default:
      return errorCode;
  }
}
