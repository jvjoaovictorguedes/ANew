package com.sadinamoda.web.domain.order_item;

import com.sadinamoda.web.domain.order.Order;
import com.sadinamoda.web.domain.products.Products;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "order_item")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue
    private UUID id;

    private Number quantity;
    private BigDecimal unique_price;

    @ManyToOne
    @JoinColumn(name = "id")
    private Order order_id;

    @ManyToOne
    @JoinColumn(name = "id")
    private Products products_id;

}
