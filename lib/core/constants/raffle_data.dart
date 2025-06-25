import '../../models/raffle.dart';

class RaffleAppData {
  static RaffleAppData? _instance;
  final List<Raffle> _raffles;

  RaffleAppData._()
      : _raffles = [
          Raffle(
            id: '1',
            img: 'assets/images/image.png',
            title: 'Win a Trip to Dubai',
            description: 'Experience the ultimate luxury',
            detail:
                'Enjoy a 7-day stay at a 5-star hotel in Dubai, including round-trip flights, a guided tour of the Burj Khalifa, desert safari experience, and access to luxury shopping malls.',
            fees: 25.0,
            entryFee: 25.0,
            startDate: DateTime.parse('2025-06-15'),
            endDate: DateTime.parse('2025-07-15'),
            prize: 'Dubai Luxury Vacation Package',
            type: 'featured',
          ),
          Raffle(
            id: '2',
            img: 'assets/images/image.png',
            title: 'Latest iPhone 16 Pro',
            description: 'Get the newest smartphone',
            detail:
                'Win an iPhone 16 Pro Max 256GB with AppleCare+ coverage for two years, a premium leather case, wireless charging pad, and a set of AirPods Pro included.',
            fees: 15.0,
            entryFee: 15.0,
            startDate: DateTime.parse('2025-06-01'),
            endDate: DateTime.parse('2025-06-30'),
            prize: 'iPhone 16 Pro Max',
            type: 'standard',
          ),
          Raffle(
            id: '3',
            img: 'assets/images/image.png',
            title: 'Tesla Model 3 Giveaway',
            description: 'Drive the future',
            detail:
                'Receive a brand new Tesla Model 3 Standard Range with full self-driving capability, a home charging station, and a one-year premium connectivity subscription.',
            fees: 50.0,
            entryFee: 50.0,
            startDate: DateTime.parse('2025-07-01'),
            endDate: DateTime.parse('2025-08-01'),
            prize: 'Tesla Model 3',
            type: 'premium',
          ),
          Raffle(
            id: '4',
            img: 'assets/images/image.png',
            title: 'Caribbean Cruise Adventure',
            description: 'Sail in style',
            detail:
                'Embark on a 7-night Caribbean cruise for two with all-inclusive dining, onboard entertainment, a private cabin, and stops at Jamaica, the Bahamas, and Grand Cayman.',
            fees: 30.0,
            entryFee: 30.0,
            startDate: DateTime.parse('2025-08-01'),
            endDate: DateTime.parse('2025-09-10'),
            prize: 'Caribbean Cruise for Two',
            type: 'featured',
          ),
          Raffle(
            id: '5',
            img: 'assets/images/image.png',
            title: 'MacBook Pro 14-inch',
            description: 'Power up your productivity',
            detail:
                'Win the latest MacBook Pro with M2 chip, 512GB SSD, 16GB RAM, a sleek Space Gray finish, and a complimentary sleeve and wireless mouse.',
            fees: 20.0,
            entryFee: 20.0,
            startDate: DateTime.parse('2025-06-01'),
            endDate: DateTime.parse('2025-06-25'),
            prize: 'MacBook Pro 14-inch',
            type: 'standard',
          ),
          Raffle(
            id: '6',
            img: 'assets/images/image.png',
            title: 'VIP Concert Tickets',
            description: 'Front-row experience',
            detail:
                'Secure VIP tickets for two to a concert of your choice, including backstage access, exclusive merchandise, and a meet-and-greet with the artist.',
            fees: 10.0,
            entryFee: 10.0,
            startDate: DateTime.parse('2025-06-20'),
            endDate: DateTime.parse('2025-07-20'),
            prize: 'Concert VIP Package',
            type: 'standard',
          ),
          Raffle(
            id: '7',
            img: 'assets/images/image.png',
            title: '65-inch 4K OLED TV',
            description: 'Cinematic home entertainment',
            detail:
                'Win a 65-inch 4K OLED Smart TV with Dolby Atmos surround sound, built-in streaming apps, a wall mount kit, and a 2-year extended warranty.',
            fees: 18.0,
            entryFee: 18.0,
            startDate: DateTime.parse('2025-06-15'),
            endDate: DateTime.parse('2025-07-05'),
            prize: '65-inch OLED TV',
            type: 'standard',
          ),
          Raffle(
            id: '8',
            img: 'assets/images/image.png',
            title: 'Bali Resort Getaway',
            description: 'Relax in paradise',
            detail:
                'Enjoy a 5-night stay at a luxury Bali resort with a spa package, daily breakfast, a private pool villa, and a cultural dance performance experience.',
            fees: 28.0,
            entryFee: 28.0,
            startDate: DateTime.parse('2025-07-15'),
            endDate: DateTime.parse('2025-08-15'),
            prize: 'Bali Resort Package',
            type: 'featured',
          ),
          Raffle(
            id: '9',
            img: 'assets/images/image.png',
            title: 'Luxury Rolex Watch',
            description: 'Timeless elegance',
            detail:
                'Win a Rolex Datejust 41mm with a diamond bezel, stainless steel and gold finish, original box, and a 5-year international warranty.',
            fees: 40.0,
            entryFee: 40.0,
            startDate: DateTime.parse('2025-07-01'),
            endDate: DateTime.parse('2025-07-30'),
            prize: 'Rolex Datejust',
            type: 'premium',
          ),
          Raffle(
            id: '10',
            img: 'assets/images/image.png',
            title: 'Ultimate Gaming PC',
            description: 'Game like a pro',
            detail:
                'Receive a high-end gaming PC with RTX 4090 GPU, 32GB RAM, 1TB SSD, RGB lighting, a gaming chair, and a one-year software subscription.',
            fees: 35.0,
            entryFee: 35.0,
            startDate: DateTime.parse('2025-06-01'),
            endDate: DateTime.parse('2025-06-28'),
            prize: 'Gaming PC Setup',
            type: 'premium',
          ),
          Raffle(
            id: '11',
            img: 'assets/images/image.png',
            title: 'Luxury Spa Weekend',
            description: 'Pamper yourself',
            detail:
                'Enjoy a weekend spa retreat for two with full treatments including massages, facials, a sauna session, and a gourmet dinner experience.',
            fees: 22.0,
            entryFee: 22.0,
            startDate: DateTime.parse('2025-06-20'),
            endDate: DateTime.parse('2025-07-10'),
            prize: 'Spa Weekend Package',
            type: 'standard',
          ),
          Raffle(
            id: '12',
            img: 'assets/images/image.png',
            title: 'Cash Prize Jackpot',
            description: 'Win big money',
            detail:
                'Claim a \$10,000 cash prize to spend as you wish, with the option for direct bank transfer or a prepaid card for instant use.',
            fees: 12.0,
            entryFee: 12.0,
            startDate: DateTime.parse('2025-06-01'),
            endDate: DateTime.parse('2025-06-20'),
            prize: '\$10,000 Cash',
            type: 'featured',
          ),
        ];

  static RaffleAppData getInstance() {
    _instance ??= RaffleAppData._();
    return _instance!;
  }

  List<TimeOption> getFullTimeDifference(DateTime from, [DateTime? to]) {
    to ??= DateTime.now();
    final diffMs = to.difference(from).inMilliseconds.abs();
    final secondsTotal = (diffMs / 1000).floor();
    final days = (secondsTotal / (24 * 60 * 60)).floor();
    final hours = ((secondsTotal % (24 * 60 * 60)) / (60 * 60)).floor();
    final minutes = ((secondsTotal % (60 * 60)) / 60).floor();
    final seconds = secondsTotal % 60;

    final result = <TimeOption>[];

    if (days > 0) {
      result.add(TimeOption(
        label: '$days Day${days != 1 ? "s" : ""}',
        value: '${days}d',
      ));
    }
    if (hours > 0) {
      result.add(TimeOption(
        label: '$hours Hour${hours != 1 ? "s" : ""}',
        value: '${hours}h',
      ));
    }
    if (minutes > 0) {
      result.add(TimeOption(
        label: '$minutes Minute${minutes != 1 ? "s" : ""}',
        value: '${minutes}m',
      ));
    }
    if (seconds > 0 || result.isEmpty) {
      result.add(TimeOption(
        label: '$seconds Second${seconds != 1 ? "s" : ""}',
        value: '${seconds}s',
      ));
    }

    return result;
  }

  List<Raffle> getAllRaffles() {
    return _raffles;
  }

  Raffle? getRaffleByIndex(int index) {
    return index < _raffles.length ? _raffles[index] : null;
  }

  Raffle? getRaffleById(String id) {
    return _raffles.firstWhere((raffle) => raffle.id == id, orElse: () => null as Raffle);
  }

  static int getDaysLeft(DateTime endDate) {
    final now = DateTime.now();
    final diffTime = endDate.difference(now).inMilliseconds;
    final diffDays = (diffTime / (1000 * 60 * 60 * 24)).ceil();
    return diffDays > 0 ? diffDays : 0;
  }

  List<TimeOption> getTimeLeft(DateTime endDate) {
    return getFullTimeDifference(endDate);
  }

  List<Raffle> getActiveRaffles() {
    return _raffles.where((raffle) => getDaysLeft(raffle.endDate!) > 0).toList();
  }

  int getRaffleCount() {
    return _raffles.length;
  }

  List<Raffle> getRafflesByPriceRange(double minFee, double maxFee) {
    return _raffles.where((raffle) => raffle.entryFee! >= minFee && raffle.entryFee! <= maxFee).toList();
  }

  void addRaffle(Raffle raffle) {
    _raffles.add(raffle);
  }

  bool removeRaffle(int index) {
    if (index < _raffles.length) {
      _raffles.removeAt(index);
      return true;
    }
    return false;
  }

  List<Raffle> getRafflesSortedByDate() {
    return [..._raffles]..sort((a, b) => a.endDate!.compareTo(b.endDate!));
  }

  List<Raffle> getRafflesByType(String type) {
    return _raffles.where((raffle) => raffle.type == type).toList();
  }

  int getRaffleCountByType(String type) {
    return _raffles.where((raffle) => raffle.type == type).length;
  }

  bool updateRaffleType(int index, String type) {
    if (index < _raffles.length) {
      _raffles[index] = Raffle(
        id: _raffles[index].id,
        title: _raffles[index].title,
        description: _raffles[index].description,
        img: _raffles[index].img,
        startDate: _raffles[index].startDate,
        endDate: _raffles[index].endDate,
        detail: _raffles[index].detail,
        fees: _raffles[index].fees,
        entryFee: _raffles[index].entryFee,
        prize: _raffles[index].prize,
        type: type,
      );
      return true;
    }
    return false;
  }

  List<Raffle> endingSoon([int daysThreshold = 7]) {
    return _raffles.where((raffle) {
      final daysLeft = getDaysLeft(raffle.endDate!);
      return daysLeft > 0 && daysLeft <= daysThreshold;
    }).toList();
  }
}