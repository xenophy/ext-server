/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Version : 50161
 Source Host           : localhost
 Source Database       : test_db

 Target Server Version : 50161
 File Encoding         : utf-8

 Date: 05/17/2012 20:47:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bio` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
--  Records of `users`
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES
('トーマス', 'thomas@sodo.com', 'げんきいっぱいの ちいさな タンクきかんしゃ きゃくしゃの アニーと クララベルを ひいて はしるのが だいすき。'),
('エドワード', 'edword@sodo.com', 'だれにでも しんせつな きかんしゃ きゃくしゃや かしゃからも しんらいされている。'),
('ヘンリー', 'henly@sodo.com', 'おおきな みどりいろの きかんしゃ。 きれいずきで じまんの ボディが よごれるのを とても いやがる。 うつくしい もりが だいすき。'),
('ゴードン', 'gordon@sodo.com', 'きゅうこうれっしゃを ひく おおきな あおい きかんしゃ。 だれよりも はやく はしることが できると、 じしんを もっている。'),
('ジェームス', 'james@sodo.com', 'きゃくしゃでも かしゃでも、 らくに ひくことが できる きかんしゃ。 サーカスの れっしゃを ひいたことも ある。'),
('パーシー', 'percy@sodo.com', 'みどりいろの ちいさな きかんしゃ。 ときどき いたずらを するけれど、 みんなと いっしょに いっしょうけんめい はたらいている。'),
('トビー', 'tobby@sodo.com', 'ボディが きで できた がっしりした ろめんきかんしゃ。 きゃくしゃの ヘンリエッタを ひいて はしる。'),
('ダック', 'duck@sodo.com', 'はしる すがたが、 よちよちと あひるのように みえるので、 ダックと よばれている。 ほんとうのなまえは モンタギュー。 だいせいぶてつどうから やってきた。'),
('ドナルド', 'donald@sodo.com', 'スコットランドから きた かもつせんようの きかんしゃ。 そっくりな ふたごの きょうだいと いつも いっしょ。'),
('ダグラス', 'douglas@sodo.com', 'ドナルドの ふたごの きょうだい。 ゆきかきの しごとが とくい。 ゆきの ひは ドナルドと いっしょに だいかつやく。'),
('オリバー', 'oliver@sodo.com', 'ダックの しせんを てつだう、 みどりいろの きかんしゃ。 だいせいぶてつどうから ブレーキしゃの トードと いっしょに やってきた。'),
('ビル', 'bill@sodo.com', 'いつも にぎやかで、 いたずらが だいすきな きいろい タンクきかんしゃ。 ベンとは ふたごの きょうだい。'),
('ベン', 'ben@sodo.com', 'ふたごの ビルと いつでも いっしょに いる。 いしきりばで はたらいたり、 ねんどを みなとに はこんだりする しごとを している。');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
