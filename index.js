var map;
var marker;
function initMap() {
    if (!navigator.geolocation) {
        alert('Geolocation APIに対応していません');
        return false;
    }
 
    // 現在地の取得
    navigator.geolocation.getCurrentPosition(function(position) {
        // 緯度経度の取得
        latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
        // 地図の作成
        map = new google.maps.Map(document.getElementById('map'), {
            center: latLng,
            zoom: 17
        });
 
        // マーカーの追加
        marker = new google.maps.Marker({
            position: latLng,
            map: map
        });
    }, function() {
        alert('位置情報取得に失敗しました');
    });
}