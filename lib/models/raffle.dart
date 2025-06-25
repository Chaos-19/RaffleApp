class Raffle {
  final String id;
  final String? title;
  final String? description;
  final String? img;
  final DateTime? startDate;
  final DateTime? endDate;
  final String? detail;
  final double? fees;
  final double? entryFee;
  final String? prize;
  final String? type;

  Raffle({
    required this.id,
    this.title,
    this.description,
    this.img,
    this.startDate,
    this.endDate,
    this.detail,
    this.fees,
    this.entryFee,
    this.prize,
    this.type,
  });
}

class TimeOption {
  final String label;
  final String value;

  TimeOption({
    required this.label,
    required this.value,
  });
}