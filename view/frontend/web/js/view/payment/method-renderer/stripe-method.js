/**
 * Inchoo_Stripe Magento JS component
 *
 * @category    Inchoo
 * @package     Inchoo_Stripe
 * @author      Ivan Weiler <ivan.weiler@inchoo.net> & Stjepan Udovičić <stjepan.udovicic@inchoo.net>
 * @copyright   Inchoo (http://inchoo.net)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
/*browser:true*/
/*global define*/
define(
    [
        'Magento_Payment/js/view/payment/cc-form'
    ],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Inchoo_Stripe/payment/stripe-form'
            },

            getCode: function() {
                return 'inchoo_stripe';
            },

            isActive: function() {
                return true;
            }
        });
    }
);
